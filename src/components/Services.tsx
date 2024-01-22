export default function Services() {
    return (
        <>
        <div className="p-5 rounded-lg max-w-2xl">
            <h1 className="text-2xl text-center">Active services</h1>
            <div className="border border-white-500"></div>

            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1 ml-1">
                Major public services
            </h2>
            <ul className="max-w-md space-y-1 ml-5 mt-3 list-disc list-inside text-gray-400">
                <li>
                    <a className="hover:underline" href="https://soine.site">
                        soine.site
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="https://mstdn.soine.site">
                        Mastodon instance: mstdn.soine.site
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="https://discord.gg/X6srY7X">
                        Discord
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="https://github.com/yudejp">
                        GitHub Organization
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="https://status.yude.jp/">
                        Server status
                    </a>
                </li>
                <li>
                    <span>Minecraft multiplayer @ <code>yude.jp</code></span>
                </li>
                <li>
                    <span>TeamSpeak 3 @ <code>yude.jp</code></span>
                </li>
            </ul>
            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1 ml-1">
                Connectivity
            </h2>
            <ul className="max-w-md space-y-1 ml-5 mt-3 list-disc list-inside text-gray-400">
                <li>
                    <a className="hover:underline" href="http://yudejpwxp2cziclocqjfd55ucw2dh6ncswopluh7exwusjlfkvkwhwqd.onion/">
                        The Onion Router
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="http://yude.i2p/?i2paddresshelper=idabfrazqbh7upvo2f5hx3ajpqglrwny66qbvcoatfqoq64ifiaq.b32.i2p">
                        I2P
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="gemini://yude.jp">
                        Gemini
                    </a>
                </li>
            </ul>
            
        </div>
        </>
    )
  }
  