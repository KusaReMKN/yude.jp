export default function Keys() {
    return (
        <>
        <div className="p-5 rounded-lg max-w-2xl">
            <h1 className="text-2xl text-center">Public keys</h1>
            <div className="border border-white-500"></div>

            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1">GNU Privacy Guard</h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                    Available on <a className="underline" href="https://github.com/yude.gpg">GitHub</a>.
                </li>
                <li>
                    Fingerprint: <code>3745 F270 DB4E 8975 6B07 62BE EB0F E5D9 25C4 A968</code>
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1">The Secure Shell (RFC4716)</h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                    Available on <a className="underline" href="https://github.com/yude.keys">GitHub</a>.
                </li>
                <li>
                    Fingerprint: <code>XEGJhmO6p0qu7C04gvtyJz5BHuIVUKOUIBqZDoSes0k</code> (SHA-256, Primary key)
                </li>
            </ul>
            
        </div>
        </>
    )
  }
  