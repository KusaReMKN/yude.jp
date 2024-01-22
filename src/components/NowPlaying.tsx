import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export interface NowPlaying {
    album?: string
    artist?: string
    isPlaying: boolean
    title?: string
    link?: string
    album_art?: string
  }
  

export default function NowPlaying() {
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
    })
    
    return (
        <>
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
        </>
    )
  }
  