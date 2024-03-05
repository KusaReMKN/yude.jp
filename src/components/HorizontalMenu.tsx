import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar, faComments } from '@fortawesome/free-regular-svg-icons'
import { faLink, faKey } from '@fortawesome/free-solid-svg-icons'
import { Pages } from "./VerticalMenu"

import { RecoilRoot, atom, useRecoilState } from 'recoil'

export const currentPage = atom({
    key: 'page',
    default: Pages.Profile,
})

export default function HorizontalMenu() {
    const [page, setPage] = useRecoilState(currentPage);

    return (
      <RecoilRoot>
        <div className="text-lg font-medium text-center hover:cursor-pointer grid grid-cols-5 grid-flow-col">
            <div
                className={`self-start py-3 rounded-lg ${page === Pages.Profile ? "bg-slate-700" : ""}`}
                onClick={() => {setPage(Pages.Profile)}}
            >
                <FontAwesomeIcon icon={faUser} />{" "}
            </div>
            <div
                className={`self-start py-3 rounded-lg ${page === Pages.Links ? "bg-slate-700" : ""}`}
                onClick={() => {setPage(Pages.Links)}}
            >
                <FontAwesomeIcon icon={faLink} />{" "}
            </div>
            <div
                className={`self-start py-3 rounded-lg ${page === Pages.Keys ? "bg-slate-700" : ""}`}
                onClick={() => {setPage(Pages.Keys)}}
            >
                <FontAwesomeIcon icon={faKey} />{" "}
            </div>
            <div
                className={`self-start py-3 rounded-lg ${page === Pages.Services ? "bg-slate-700" : ""}`}
                onClick={() => {setPage(Pages.Services)}}
            >
                <FontAwesomeIcon icon={faStar} />{" "}
            </div>
            <div
                className={`self-start py-3 rounded-lg ${page === Pages.Chat ? "bg-slate-700" : ""}`}
                onClick={() => {setPage(Pages.Chat)}}
            >
                <FontAwesomeIcon icon={faComments} />{" "}
            </div>
        </div>
      </RecoilRoot>
    )
  }
  