import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTelegram, faXTwitter, faInstagram, faMastodon, faKeybase, faSteam, faLastfm, faTwitch, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

export default function Links() {
    return (
        <>
            <div className="p-5 rounded-lg max-w-2xl">
                <h1 className="text-2xl text-center">Links</h1>
                <div className="border border-white-500 mb-3"></div>
                <div className="gap-x-6 gap-y-8 flex flex-wrap">
                    <div className="w-24 h-16">
                        <a href="https://x.com/yude_jp">
                            <FontAwesomeIcon className="w-24 h-11" icon={faXTwitter} />
                            <span className="block text-gray-400 text-center">
                                X
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://mstdn.soine.site/@yude">
                            <FontAwesomeIcon className="w-24 h-11" icon={faMastodon} />
                            <span className="block text-gray-400 text-center">
                                Mastodon
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://keybase.io/yude">
                            <FontAwesomeIcon className="w-24 h-11" icon={faKeybase} />
                            <span className="block text-gray-400 text-center">
                                Keybase
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://instagram.com/yude.jp">
                            <FontAwesomeIcon className="w-24 h-11" icon={faInstagram} />
                            <span className="block text-gray-400 text-center">
                                Instagram
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://t.me/yudejp">
                            <FontAwesomeIcon className="w-24 h-11" icon={faTelegram} />
                            <span className="block text-gray-400 text-center">
                                Telegram
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://github.com/yude">
                            <FontAwesomeIcon className="w-24 h-11" icon={faGithub} />
                            <span className="block text-gray-400 text-center">
                                GitHub
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://scrapbox.io/yude">
                            <img src="./logo/scrapbox.svg" className="w-24 h-12 grayscale" />
                            <span className="block text-gray-400 text-center">
                                Scrapbox
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://zenn.dev/yude">
                            <img src="./logo/zenn.svg" className="w-24 h-12 text-center invert" />
                            <span className="block text-gray-400 text-center">
                                Zenn
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://yudejp.hatenablog.jp">
                            <img src="./logo/hatenablog.svg" className="w-24 h-12 text-center invert" />
                            <span className="block text-gray-400">
                                はてなブログ
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://sizu.me/yude">
                            <img src="./logo/sizume.svg" className="w-24 h-12 text-center invert" />
                            <span className="block text-gray-400 text-center">
                                しずかなインターネット
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://steamcommunity.com/id/yudejp">
                            <FontAwesomeIcon className="w-24 h-11" icon={faSteam} />
                            <span className="block text-gray-400 text-center">
                                Steam
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://www.last.fm/user/yude_jp">
                            <FontAwesomeIcon className="w-24 h-11" icon={faLastfm} />
                            <span className="block text-gray-400 text-center">
                                Last.fm
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://twitch.tv/yudejp">
                            <FontAwesomeIcon className="w-24 h-11" icon={faTwitch} />
                            <span className="block text-gray-400 text-center">
                                Twitch
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://open.spotify.com/user/yude1119">
                            <FontAwesomeIcon className="w-24 h-11" icon={faSpotify} />
                            <span className="block text-gray-400 text-center">
                                Spotify
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://annict.com/yude">
                            <img src="./logo/annict.png" className="w-12 h-12 ml-6 grayscale" />
                            <span className="block text-gray-400 text-center">
                                Annict
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16">
                        <a href="https://vrcprofile.com/p/yude">
                            <img src="./logo/vrchat.png" className="w-12 ml-6 mt-5" />
                            <span className="block text-gray-400 text-center mt-2">
                                VRChat
                            </span>
                        </a>
                    </div>
                    <div className="w-24 h-16 ml-auto">
                        <a href="https://scrapbox.io/yude/アカウント">
                            <FontAwesomeIcon className="w-24 h-11" icon={faAnglesRight} />
                            <span className="block text-gray-400 text-center">
                                More ...
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
  }
  