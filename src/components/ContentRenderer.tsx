import { useRecoilState } from 'recoil'

import Profile from "./Profile"
import Links from "./Links"
import Keys from "./Keys"
import Activities from "./History"
import Spotify from "./Spotify"
import Services from "./Services"

import { currentPage, Pages } from "./Menu"



export default function ContentRenderer() {
    const [page, _] = useRecoilState(currentPage);
    return (
        <>
            { page === Pages.Profile && <><Profile /><Spotify /></> }
            { page === Pages.Links && <Links /> }
            { page === Pages.Keys && <Keys /> }
            { page === Pages.Activities && <Activities /> }
            { page === Pages.Services && <Services /> }
        </>
    )
}
