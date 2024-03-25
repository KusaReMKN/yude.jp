import { useTranslation } from "react-i18next";

export default function LanguageMenu() {
    const { t, i18n: { changeLanguage, language } } = useTranslation();

    return (
        <>
            <button
                type="button"
                className="btn btn-secondary drop-shadow-md mr-3"
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                aria-label="言語の切り替え"
            >
                {language === "ja" && "🇯🇵"}
                {language === "en" && "🇺🇸"}
                {language === "zhCN" && "🇨🇳"}
            </button>

            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li onClick={() => { changeLanguage("ja") }}>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">🇯🇵 日本語</a>
                    </li>
                    <li onClick={() => { changeLanguage("en") }}>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">🇺🇸 English (US)</a>
                    </li>
                    <li onClick={() => { changeLanguage("zhCN") }}>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">🇨🇳 简体中文</a>
                    </li>
                </ul>
            </div>

        </>
    )
}
