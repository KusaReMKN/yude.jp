export default function Activities() {
    return (
        <>
        <div className="p-5 rounded-lg max-w-2xl">
            <h1 className="text-2xl text-center">Recent activities</h1>
            <div className="border border-white-500"></div>

            <ol className="relative border-s border-gray-700 left-2 mt-3">            
                <li className="mb-2 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                        December 2023
                    </time>
                    <h3 className="text-lg font-semibold text-white">
                        <a href="https://www.hiroshima-cu.ac.jp">
                            ICT Troubleshooting Contest 2023
                        </a>
                    </h3>
                    <p className="text-base font-normal text-gray-400">
                        Team いちぴろ・エクスプローラ
                    </p>
                </li>
                <li className="mb-2 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                        November 2023
                    </time>
                    <h3 className="text-lg font-semibold text-white">
                        <a href="https://hiss25th.sakura.ne.jp/">
                            Poster session
                        </a>
                    </h3>
                    <p className="text-base font-normal text-gray-400">
                        The 25th IEEE Hiroshima Section Student Symposium
                    </p>
                </li>
                <li className="mb-2 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                        September 2022
                    </time>
                    <h3 className="text-lg font-semibold text-white">
                        <a href="https://www.iij.ad.jp/">
                            Intern @ Internet Initiative Japan Inc.
                        </a>
                    </h3>
                    <p className="text-base font-normal text-gray-400">
                        ExperienceCourse -クラウド編-
                    </p>
                </li>
                <li className="mb-2 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                        August 2022
                    </time>
                    <h3 className="text-lg font-semibold text-white">
                        <a href="https://www.hirotec.co.jp/">
                            Intern @ HIROTEC Corporation.
                        </a>
                    </h3>
                </li>
            </ol>
        </div>
        </>
    )
  }
  