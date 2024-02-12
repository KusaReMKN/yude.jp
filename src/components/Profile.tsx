import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCake, faMapPin } from '@fortawesome/free-solid-svg-icons'

export default function Profile() {
    return (
        <>
        <div className="rounded-lg w-full">
            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1 ml-1">所属</h2>

            <ol className="relative border-s border-gray-700 left-2">                  
                <li className="mb-2 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                        2020 年 4 月 &ndash; 現在
                    </time>
                    <h3 className="text-lg font-semibold text-white">
                        <a href="https://www.hiroshima-cu.ac.jp">
                            広島市立大学
                        </a>
                    </h3>
                    <p className="text-base font-normal text-gray-400">
                        <a href="https://net.info.hiroshima-cu.ac.jp">
                            情報ネットワーク研究室
                        </a>
                    </p>
                    <p className="text-base font-normal text-gray-400">
                        <a href="https://funahcu.github.io/funalab">
                            センシング講座, ネットワークソフトウェア研究グループ
                        </a>
                    </p>
                    <p className="text-base font-normal text-gray-400">
                        <a href="http://www.cne.info.hiroshima-cu.ac.jp/">
                            情報工学科
                        </a>
                    </p>
                    <p className="text-base font-normal text-gray-400">
                        <a href="https://www2.info.hiroshima-cu.ac.jp/">
                            情報科学部
                        </a>
                    </p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">2017 年 4 月 &ndash; 2020 年 3 月</time>
                    <h3 className="text-lg font-semibold text-white">鳥取県立鳥取東高等学校</h3>
                    <p className="text-base font-normal text-gray-400">理数科</p>
                </li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1 ml-1">基本情報</h2>
            
            <ul className="space-y-1 list-inside mt-2 ml-5">
                <li className="items-center">
                    <span className="text-gray-300"><FontAwesomeIcon icon={faCake} />&nbsp;<span className="text-gray-50">2001 年 11 月 19 日</span> 生まれ (22 歳)</span>
                </li>
                <li className="items-center">
                    <span className="text-gray-300"><FontAwesomeIcon icon={faMapPin} />&nbsp;&nbsp;<span className="text-gray-50">広島県 広島市</span> 在住</span>
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1 ml-1">資格, 免許</h2>
            <ul className="max-w-md space-y-1 ml-5 list-disc list-inside text-gray-400">
                <li>
                    IPA 基本情報技術者 (2022 年 4 月)
                </li>
                <li>
                    普通自動車第一種運転免許, AT 限定 (2021 年 6 月)
                </li>
                <li>
                    TOEIC Listening & Reading: 860 (2022 年 12 月)
                </li>
                <li>
                    TOEIC Listening & Reading, IP テスト 960 点 (2021 年 12 月)
                </li>
            </ul>


        </div>
        </>
    )
  }
  