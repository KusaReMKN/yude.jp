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

export default function HorizontalMenu() {
    const [page, setPage] = useRecoilState(currentPage);

    return (
      <RecoilRoot>
        <div className="text-lg font-medium text-center hover:cursor-pointer grid grid-cols-4 grid-flow-col">
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
        </div>
      </RecoilRoot>
    )
  }
  