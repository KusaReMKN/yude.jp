import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";

export default function Keys() {
    const { t } = useTranslation();

    return (
        <>
            <div className="rounded-lg w-full">
                <h2 className="text-xl font-semibold dark:text-gray-200 mt-2 mb-1 ml-1">GNU Privacy Guard</h2>
                <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-300 ml-5">
                    <li>
                        <a className="underline" href="https://github.com/yude.gpg">GitHub</a>&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </li>
                    <li>
                        {t("fingerprint")}: <code>3745 F270 DB4E 8975 6B07 62BE EB0F E5D9 25C4 A968</code>
                    </li>
                </ul>

                <h2 className="text-xl font-semibold dark:text-gray-200 mt-2 mb-1 ml-1">The Secure Shell (RFC 4716)</h2>
                <ul className="max-w-md space-y-1 list-disc list-inside dark:text-gray-300 ml-5">
                    <li>
                        <a className="underline" href="https://github.com/yude.keys">GitHub</a>&nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </li>
                </ul>

            </div>
        </>
    )
}
