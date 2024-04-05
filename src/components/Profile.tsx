import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCake, faMapPin, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";

export default function Profile() {
    const { t, i18n: { language } } = useTranslation();

    const localizedMonth = function (idx: number) {
        let objDate = new Date();
        let lang = language;
        objDate.setDate(1);
        objDate.setMonth(idx - 1);
        if (lang === "zhCN") {
            lang = "zh-cn";
        }
        if (language === "ja" || language == "zhCN") {
            return idx;
        }
        return objDate.toLocaleString(lang, { month: "long" });
    }

    return (
        <>
            <div className="rounded-lg w-full">
                <h2 className="text-xl font-semibold dark:text-gray-200 mt-2 mb-1 ml-1">{t("affiliation")}</h2>

                <ol className="relative border-s border-gray-700 left-2">
                    <li className="mb-2 ms-4">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none dark:text-gray-400">
                            {t("year/month", { year: 2024, month: localizedMonth(4) })} &ndash;
                        </time>
                        <h3 className="text-lg font-semibold dark:text-white">
                            <a href="https://www.hiroshima-cu.ac.jp">
                                {t("isp")}
                            </a>
                        </h3>
                    </li>
                    <li className="mb-2 ms-4">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none dark:text-gray-400">
                            {t("year/month", { year: 2020, month: localizedMonth(4) })} &ndash; {t("year/month", { year: 2024, month: localizedMonth(3) })}
                        </time>
                        <h3 className="text-lg font-semibold dark:text-white">
                            <a href="https://www.hiroshima-cu.ac.jp">
                                {t("hcu")}
                            </a>
                        </h3>
                        <p className="text-base font-normal dark:text-gray-400">
                            <a href="http://www.info.hiroshima-cu.ac.jp/">
                                {t("faculty")}
                            </a>
                        </p>
                        <p className="text-base font-normal dark:text-gray-400">
                            <a href="http://www.info.hiroshima-cu.ac.jp/">
                                {t("degree")}
                            </a>
                        </p>
                    </li>
                </ol>

                <p className="text-right">
                    <a href="https://scrapbox.io/yude/%E9%81%8E%E5%8E%BB%E3%81%AE%E6%B4%BB%E5%8B%95%E7%AD%89">
                        {t("past_activities")}&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </p>

                <h2 className="text-xl font-semibold dark:text-gray-200 mt-2 mb-1 ml-1">{t("basic_info")}</h2>

                <ul className="space-y-1 list-inside mt-2 ml-5">
                    <li className="items-center">
                        <span className="dark:text-gray-300"><FontAwesomeIcon icon={faCake} />&nbsp;
                            <span className="dark:text-gray-50">{t("2001/11/19")}</span> {t("birth", { age: "22" })}</span>
                    </li>
                    <li className="items-center">
                        <span className="dark:text-gray-300"><FontAwesomeIcon icon={faMapPin} />&nbsp;&nbsp;<span className="dark:text-gray-50">{t("location")}</span></span>
                    </li>
                </ul>

                <h2 className="text-xl font-semibold dark:text-gray-200 mt-2 mb-1 ml-1">{t("licenses")}</h2>
                <ul className="max-w-md space-y-1 ml-5 list-disc list-inside dark:text-gray-400">
                    <li>
                        プロジェクトセカイ カラフルステージ！ feat. 初音ミク フルコンボ楽曲 (MASTER) 200 曲 ({t("year/month", { year: 2023, month: localizedMonth(6) })})
                    </li>
                    <li>
                        IPA 基本情報技術者 ({t("year/month", { year: 2022, month: localizedMonth(4) })})
                    </li>
                    <li>
                        普通自動車第一種運転免許, AT 限定 ({t("year/month", { year: 2021, month: localizedMonth(6) })})
                    </li>
                    <li>
                        TOEIC Listening & Reading: 860 点 ({t("year/month", { year: 2022, month: localizedMonth(12) })})
                    </li>
                    <li>
                        TOEIC Listening & Reading, IP テスト 960 点 ({t("year/month", { year: 2021, month: localizedMonth(12) })})
                    </li>
                    <li>
                        実用英語技能検定 2 級 ({t("year/month", { year: 2018, month: localizedMonth(10) })})
                    </li>
                    <li>
                        全日本弓道連盟 審査 1 級 ({t("year/month", { year: 2015, month: localizedMonth(6) })})
                    </li>
                </ul>
            </div>
        </>
    )
}
