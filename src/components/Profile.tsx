import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCake, faMapPin } from '@fortawesome/free-solid-svg-icons'

export default function Profile() {
    return (
        <>
        <div className="rounded-lg w-full">
            <h1 className="text-2xl text-center">Profile</h1>
            <div className="border border-white-500"></div>

            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1 ml-1">Affiliation</h2>

            <ol className="relative border-s border-gray-700 left-2">                  
                <li className="mb-2 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                        April 2020 - Present
                    </time>
                    <h3 className="text-lg font-semibold text-white">
                        <a href="https://www.hiroshima-cu.ac.jp">
                            Hiroshima City University
                        </a>
                    </h3>
                    <p className="text-base font-normal text-gray-400">
                        <a href="https://net.info.hiroshima-cu.ac.jp">
                            Information Network Laboratory
                        </a>
                    </p>
                    <p className="text-base font-normal text-gray-400">
                        <a href="https://funahcu.github.io/funalab">
                            Lectureship of Sensing, Network Software
                        </a>
                    </p>
                    <p className="text-base font-normal text-gray-400">
                        <a href="http://www.cne.info.hiroshima-cu.ac.jp/">
                            Department of Computer and Network Engineering,
                        </a>
                        &nbsp;
                        <a href="https://www2.info.hiroshima-cu.ac.jp/">Faculty of Information Sciences</a>
                    </p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">April 2017 - March 2020</time>
                    <h3 className="text-lg font-semibold text-white">Tottori Prefectural, Tottori East High School</h3>
                    <p className="text-base font-normal text-gray-400">Diploma of Science and Mathematics</p>
                </li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1 ml-1">Biography</h2>
            
            <ul className="space-y-1 list-inside mt-2 ml-5">
                <li className="items-center">
                    <span className="text-gray-300"><FontAwesomeIcon icon={faCake} />&nbsp;Born on <span className="text-gray-50">November 19, 2001</span> (22 y/o)</span>
                </li>
                <li className="items-center">
                    <span className="text-gray-300"><FontAwesomeIcon icon={faMapPin} />&nbsp;&nbsp;Living in <span className="text-gray-50">Hiroshima, Japan</span></span>
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1 ml-1">Certification</h2>
            <ul className="max-w-md space-y-1 ml-5 list-disc list-inside text-gray-400">
                <li>
                    IPA 基本情報技術者 (April 2022)
                </li>
                <li>
                    普通自動車第一種運転免許, AT 限定 (June 2021)
                </li>
                <li>
                    TOEIC Listening & Reading: 860 (December 2022)
                </li>
                <li>
                    TOEIC Listening & Reading, IP Test: 960 (December 2021)
                </li>
            </ul>


        </div>
        </>
    )
  }
  