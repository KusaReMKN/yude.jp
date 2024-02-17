import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
    return (
        <>
        <div className="rounded-lg w-full">
            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1 ml-1">
                サービス
            </h2>
            <ul className="max-w-md space-y-1 ml-5 mt-3 list-disc list-inside text-gray-400">
                <li>
                    <a className="hover:underline" href="https://soine.site">
                        soine.site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="https://mstdn.soine.site">
                        Mastodon インスタンス: 添い寝して！ <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="https://discord.gg/X6srY7X">
                        Discord サーバー <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="https://github.com/yudejp">
                        GitHub Organization <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="https://status.yude.jp/">
                        サービス状況 <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </li>
                <li>
                    <span>Minecraft マルチプレイサーバ @ <code>yude.jp</code></span>
                </li>
                <li>
                    <span>TeamSpeak 3 サーバ @ <code>yude.jp</code></span>
                </li>
            </ul>
            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1 ml-1">
                接続性
            </h2>
            <p className="text-gray-200 ml-3 -mb-1">閲覧にはそれぞれのプロトコルに対応したソフトウェアが必要です。</p>
            <ul className="max-w-md space-y-1 ml-5 mt-3 list-disc list-inside text-gray-400">
                <li>
                    <a className="hover:underline" href="http://yudejpwxp2cziclocqjfd55ucw2dh6ncswopluh7exwusjlfkvkwhwqd.onion/">
                        The Onion Router <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="http://yude.i2p/?i2paddresshelper=idabfrazqbh7upvo2f5hx3ajpqglrwny66qbvcoatfqoq64ifiaq.b32.i2p">
                        I2P <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="gemini://yude.jp">
                        Gemini <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </li>
            </ul>
            
        </div>
        </>
    )
  }
  