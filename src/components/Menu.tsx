import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar} from '@fortawesome/free-regular-svg-icons'
import { faLink, faKey } from '@fortawesome/free-solid-svg-icons'

import { RecoilRoot, atom, useRecoilState } from 'recoil'

export enum Pages {
    Profile = 0,
    Links = 1,
    Keys = 2,
    Activities = 3,
    Spotify = 4,
    Services = 5,
  }

export const currentPage = atom({
    key: 'page',
    default: Pages.Profile,
})

export default function Menu() {
    const [page, setPage] = useRecoilState(currentPage);

    return (
      <RecoilRoot>
        <ul className="w-full text-lg font-medium text-center hover:cursor-pointer">
            <li
                className={`w-full px-4 py-2${page === Pages.Profile ? " bg-slate-700" : ""}`}
                onClick={() => {setPage(Pages.Profile)}}
            >
                <FontAwesomeIcon icon={faUser} />{" "}
                <p>プロフィール</p>
            </li>
            <li
                className={`w-full px-4 py-2${page === Pages.Links ? " bg-slate-700" : ""}`}
                onClick={() => {setPage(Pages.Links)}}
            >
                <FontAwesomeIcon icon={faLink} />{" "}
                <p>リンク</p>
            </li>
            <li
                className={`w-full px-4 py-2${page === Pages.Keys ? " bg-slate-700" : ""}`}
                onClick={() => {setPage(Pages.Keys)}}
            >
                <FontAwesomeIcon icon={faKey} />{" "}
                <p>公開鍵</p>
            </li>
            <li
                className={`w-full px-4 py-2${page === Pages.Services ? " bg-slate-700" : ""}`}
                onClick={() => {setPage(Pages.Services)}}
            >
                <FontAwesomeIcon icon={faStar} />{" "}
                <p>サービス</p>
            </li>
        </ul>
      </RecoilRoot>
    )
  }
  