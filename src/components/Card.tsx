import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faMusic } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

import { useState, useEffect } from 'react';

import Logo from "./Logo"

interface NowPlaying {
    album?: string
    artist?: string
    isPlaying: boolean
    title?: string
    link?: string
    album_art?: string
}

export default function Card() {
    const [np, setNp] = useState<NowPlaying>();

    useEffect(() => {
        fetch(
            "https://vercel-spotify-api.vercel.app/api/Spotify"
        )
        .then(res => res.json())
        .then(data => {
            if (data) {
                setNp(data)
            }
        })
    }, [])

    return (
        <div className="container">
            <div
                className="absolute opacity-20 w-screen -z-10 blur-sm"
                style={np && np.isPlaying ? {
                    height: `89%`,
                    backgroundImage: `url(${np.album_art})`,
                    backgroundColor: `rgba(255, 255, 255, 0.2)`,
                    backgroundBlendMode: `lighten`
                } : {}}
            ></div>
            <div className="flex justify-center w-screen items-center">
                <div className="mx-2 inline-block">
                    <img className="rounded-full" width={100} height={100} src="./avatar.webp" />
                </div>
                <div className="mx-2 text-left h-full inline-block">
                    <Logo />
                    <p className="text-white mt-2 -mb-1">
                        {np && np.isPlaying && 
                            <div className="flex flex-row">
                                <div className="w-5 text-gray-300">
                                    <FontAwesomeIcon icon={faMusic} />
                                </div>
                                <div className="text-left max-w-xs">
                                    <span className="text-gray-300">{np.artist}</span>
                                    <p className="text-lg">{np.title}</p>
                                </div>
                            </div>
                        }
                    </p>
                    <div className="text-white mt-2">
                        <p className="font-mono left-0.5 relative">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-300" />{" "}
                            i@yude.jp
                        </p>
                        <p className="font-mono left-0.5 relative">
                            <FontAwesomeIcon icon={faPhone} className="text-gray-300" />{" "}
                            +81 70-8909-1949
                        </p>
                        <p className="font-mono left-0.5 relative">
                            <a href="https://x.com/yude_jp">
                                <FontAwesomeIcon icon={faXTwitter} className="text-gray-300" />{" "}
                                @yude_jp
                            </a>
                        </p>
                        <p className="font-mono left-0.5 relative">
                            <FontAwesomeIcon icon={faDiscord} className="text-gray-300" />{" "}
                            <span className="-ml-1">yude</span>
                        </p>
                        <p className="font-mono left-0.5 relative">
                            <a href="https://github.com/yude">
                                <FontAwesomeIcon icon={faGithub} className="text-gray-300" />{" "}
                                yude
                            </a>
                        </p>
                    </div>
                </div>
                </div>
            </div>
    )
  }
  