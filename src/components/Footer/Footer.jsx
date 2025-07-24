export default function Footer() {
    return (
        <>
            <p className="text-center text-xs text-gray-500">
                &copy;2023-{new Date().getFullYear()}{' '}
                <a href="https://github.com/victorgare">Victor Garé</a>
            </p>
        </>
    )
}
