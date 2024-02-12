import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar} from '@fortawesome/free-regular-svg-icons'
import { faLink, faKey, faSquarePersonConfined } from '@fortawesome/free-solid-svg-icons'

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
        <ul className="w-full text-lg font-medium">
            <li className="w-full px-4 py-2" onClick={() => {setPage(Pages.Profile)}}>
                <FontAwesomeIcon icon={faUser} />{" "}プロフィール
            </li>
            <li className="w-full px-4 py-2" onClick={() => {setPage(Pages.Links)}}>
                <FontAwesomeIcon icon={faLink} />{" "}リンク
            </li>
            <li className="w-full px-4 py-2" onClick={() => {setPage(Pages.Keys)}}>
                <FontAwesomeIcon icon={faKey} />{" "}公開鍵
            </li>
            <li className="w-full px-4 py-2" onClick={() => {setPage(Pages.Activities)}}>
                <FontAwesomeIcon icon={faSquarePersonConfined} />{" "}活動
            </li>
            <li className="w-full px-4 py-2" onClick={() => {setPage(Pages.Services)}}>
                <FontAwesomeIcon icon={faStar} />{" "}サービス
            </li>
        </ul>
      </RecoilRoot>
    )
  }
  