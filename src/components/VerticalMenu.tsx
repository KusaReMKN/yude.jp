import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar, faComments } from '@fortawesome/free-regular-svg-icons'
import { faLink, faKey } from '@fortawesome/free-solid-svg-icons'

import { RecoilRoot, atom, useRecoilState } from 'recoil'
import { useTranslation } from "react-i18next";

export enum Pages {
    Profile = 0,
    Links = 1,
    Keys = 2,
    Activities = 3,
    Spotify = 4,
    Services = 5,
    Chat = 6,
}

export const currentPage = atom({
    key: 'page',
    default: Pages.Profile,
})

export default function VerticalMenu() {
    const { t } = useTranslation();

    const [page, setPage] = useRecoilState(currentPage);
    const activeColor = " bg-slate-700 text-white"

    return (
        <RecoilRoot>
            <div className="sticky top-5">
                <ul className="text-lg font-medium text-center hover:cursor-pointer">
                    <li
                        className={`w-full px-4 py-2 rounded-lg${page === Pages.Profile ? activeColor : ""}`}
                        onClick={() => { setPage(Pages.Profile) }}
                    >
                        <FontAwesomeIcon icon={faUser} />{" "}
                        <p>{t("profile")}</p>
                    </li>
                    <li
                        className={`w-full px-4 py-2 rounded-lg${page === Pages.Links ? activeColor : ""}`}
                        onClick={() => { setPage(Pages.Links) }}
                    >
                        <FontAwesomeIcon icon={faLink} />{" "}
                        <p>{t("links")}</p>
                    </li>
                    <li
                        className={`w-full px-4 py-2 rounded-lg${page === Pages.Keys ? activeColor : ""}`}
                        onClick={() => { setPage(Pages.Keys) }}
                    >
                        <FontAwesomeIcon icon={faKey} />{" "}
                        <p>{t("public_keys")}</p>
                    </li>
                    <li
                        className={`w-full px-4 py-2 rounded-lg${page === Pages.Services ? activeColor : ""}`}
                        onClick={() => { setPage(Pages.Services) }}
                    >
                        <FontAwesomeIcon icon={faStar} />{" "}
                        <p>{t("services")}</p>
                    </li>
                    <li
                        className={`w-full px-4 py-2 rounded-lg${page === Pages.Chat ? activeColor : ""}`}
                        onClick={() => { setPage(Pages.Chat) }}
                    >
                        <FontAwesomeIcon icon={faComments} />{" "}
                        <p>{t("chat")}</p>
                    </li>
                </ul>
            </div>
        </RecoilRoot>
    )
}
