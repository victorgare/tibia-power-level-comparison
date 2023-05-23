import classNames from 'classnames'
import {
    Children,
    forwardRef,
    useEffect,
    useId,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react'
import TabItem from './TabItem'
import type { TabItemProps } from './TabItem'
import type {
    ComponentProps,
    ForwardedRef,
    KeyboardEvent,
    PropsWithChildren,
    ReactElement,
} from 'react'

export interface TabsProps
    extends PropsWithChildren,
        Omit<ComponentProps<'div'>, 'ref' | 'style'> {
    onActiveTabChange?: (activeTab: number) => void
}

export interface TabsRef {
    setActiveTab: (activeTab: number) => void
}

interface TabEventProps {
    target: number
}

interface TabKeyboardEventProps extends TabEventProps {
    event: KeyboardEvent<HTMLAnchorElement>
}

const tabStyle = {
    active: 'text-white bg-slate-600',
    inactive: 'text-slate-600 bg-white border border-slate-600',
}

export const TabsComponent = forwardRef<TabsRef, TabsProps>(
    ({ children, onActiveTabChange }, ref: ForwardedRef<TabsRef>) => {
        const id = useId()
        const tabs = useMemo(
            () =>
                Children.map(
                    children as ReactElement<PropsWithChildren<TabItemProps>>[],
                    ({ props }) => props
                ),
            [children]
        )

        const tabRefs = useRef<HTMLButtonElement[]>([])
        const [activeTab, setActiveTab] = useState(
            Math.max(
                0,
                tabs.findIndex((tab) => tab.active)
            )
        )
        const [focusedTab, setFocusedTab] = useState(-1)

        const setActiveTabWithCallback = (activeTab: number) => {
            setActiveTab(activeTab)
            if (onActiveTabChange) onActiveTabChange(activeTab)
        }

        const handleClick = ({ target }: TabEventProps): void => {
            setActiveTabWithCallback(target)
            setFocusedTab(target)
        }

        const handleKeyboard = ({
            event,
            target,
        }: TabKeyboardEventProps): void => {
            if (event.key === 'ArrowLeft') {
                setFocusedTab(Math.max(0, focusedTab - 1))
            }

            if (event.key === 'ArrowRight') {
                setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1))
            }

            if (event.key === 'Enter') {
                setActiveTabWithCallback(target)
                setFocusedTab(target)
            }
        }

        useEffect(() => {
            tabRefs.current[focusedTab]?.focus()
        }, [focusedTab])

        useImperativeHandle(ref, () => ({
            setActiveTab: setActiveTabWithCallback,
        }))

        return (
            <>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul
                            className="mb-0 flex list-none flex-row flex-wrap pb-4 pt-3 text-center"
                            role="tablist"
                        >
                            {tabs.map((tab, index) => {
                                return (
                                    <li
                                        key={`${id}-tab-${index}`}
                                        className="-mb-px mr-2 flex-auto text-center last:mr-0"
                                    >
                                        <a
                                            className={classNames(
                                                'flex h-full items-center justify-center rounded px-3 py-1 text-xs font-bold uppercase leading-normal shadow-lg disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
                                                {
                                                    [tabStyle.active]:
                                                        index === activeTab,
                                                    [tabStyle.inactive]:
                                                        index !== activeTab &&
                                                        !tab.disabled,
                                                }
                                            )}
                                            id={`${id}-tab-${index}`}
                                            onClick={() =>
                                                handleClick({
                                                    target: index,
                                                })
                                            }
                                            onKeyDown={(event) =>
                                                handleKeyboard({
                                                    event,
                                                    target: index,
                                                })
                                            }
                                            data-toggle="tab"
                                            role="tablist"
                                        >
                                            {tab.icon && (
                                                <tab.icon className="mr-2 h-5 w-5" />
                                            )}
                                            {tab.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div>
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    aria-labelledby={`${id}-tab-${index}`}
                                    className="p-4"
                                    hidden={index !== activeTab}
                                    id={`${id}-tabpanel-${index}`}
                                    role="tabpanel"
                                    tabIndex={0}
                                >
                                    {tab.children}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
)

TabsComponent.displayName = 'Tabs.Group'
export const Tabs = { Group: TabsComponent, Item: TabItem }
