import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Profile() {
    return (
        <>
            <div className="p-5 rounded-lg">
                <h1 className="text-2xl text-center">Works</h1>
                <div className="border border-white-500"></div>

                <h2 className="text-xl font-semibold text-gray-200 mt-2 mb-1">Software</h2>
                <ul className="max-w-md space-y-1 text-gray-400">
                    <a href="https://github.com/yude">
                    <li>
                        <FontAwesomeIcon icon={faGithub} />&nbsp;
                        <span className="hover:underline">
                            GitHub
                        </span>
                    </li>
                    </a>
                </ul>
                
                


            </div>
        </>
    )
  }
  