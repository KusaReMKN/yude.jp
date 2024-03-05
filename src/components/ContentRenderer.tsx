import { useRecoilState } from 'recoil'

import Profile from "./Profile"
import Links from "./Links"
import Keys from "./Keys"
import Spotify from "./Spotify"
import Services from "./Services"
import Chat from "./Chat"

import { currentPage, Pages } from "./VerticalMenu"

export default function ContentRenderer() {
    const [page, _] = useRecoilState(currentPage);
    return (
        <>
            { page === Pages.Profile && <><Profile /><Spotify /></> }
            { page === Pages.Links && <Links /> }
            { page === Pages.Keys && <Keys /> }
            { page === Pages.Services && <Services /> }
            { page === Pages.Chat && <Chat /> }
        </>
    )
}
