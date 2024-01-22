import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Card() {
    return (
        <>
        <div className="flex justify-center items-center">
            <div className="mx-2">
                <img className="rounded-full" width={100} height={100} src="./avatar.webp" />
            </div>
            <div className="mx-2 text-left">
                <p className="text-5xl text-white">
                    yude
                </p>
                <div className="text-white mt-2">
                    <p className="font-mono left-0.5 relative">
                        <FontAwesomeIcon icon={faEnvelope} /> i@yude.jp
                    </p>
                    <p className="font-mono left-0.5 relative">
                        <FontAwesomeIcon icon={faPhone} /> +81 70-8909-1949
                    </p>
                </div>
            </div>
        </div>
        </>
    )
  }
  