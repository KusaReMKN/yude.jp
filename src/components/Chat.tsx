import { useEffect, useState } from "react";
import { currentPage, Pages } from "./VerticalMenu"
import { RecoilRoot, useRecoilState } from 'recoil'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { formatDistance } from 'date-fns'
import { ja } from 'date-fns/locale/ja'
import { InlineMath } from 'react-katex';

export default function Chat() {
    const [page, _] = useRecoilState(currentPage);
    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    const [messages, setMessages] = useState<Message[]>();
    const [alert, setAlert] = useState("");

    interface Message {
        name: string
        body: string
        createdAt: string
    }

    useEffect(() => {
        if (page === Pages.Chat) {
            updateChat();
        }
    }, [page]);

    async function submit() {
        await fetch(
            "https://bbs.yude.workers.dev/api/message",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: 'cors',
                body: JSON.stringify({
                    name: name,
                    body: body,
                })
            }
        )
        .then(
            (res) => res.text()
        )
        .then (
            async (text) => {
                if (text.includes("Success")) {
                    await showAlert("送信しました。");
                }
            }
        )
        await new Promise(s => setTimeout(s, 800));
        updateChat();
    }

    const updateChat = () => {
        fetch(
            "https://bbs.yude.workers.dev/api/messages",
        )
        .then((res) => res.json())
        .then((data) => setMessages(data));
    }
    const updateName = (e: any) => {
        setName(e.target.value);
    }
    const updateBody = (e: any) => {
        setBody(e.target.value);
    }

    async function showAlert(alert: string) {
        setAlert(alert);
        await new Promise(s => setTimeout(s, 1500));
        setAlert("");
    }

    return (
        <RecoilRoot>
            <div className={`w-1/2 absolute flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600${alert === "" ? ` hidden` : ``}`} role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div>
                    {alert}
                </div>
            </div>
            <div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">名前</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={name} onChange={updateName} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">本文</label>
                    <input type="text" id="body" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500" value={body} onChange={updateBody} />
                </div>
                <button onClick={submit} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <FontAwesomeIcon icon={faPaperPlane} />{" "}送信
                </button>
            </div>

            <div className="overflow-auto max-h-96 mt-5 rounded-lg">
            {
                messages &&
                messages.map((message, index) => {
                    return (
                        <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
                            <p className="font-medium opacity-80">
                                {message.name} さん,{" "}
                                {
                                    formatDistance(Date.parse(message.createdAt), new Date(), { addSuffix: true, locale: ja })
                                }
                            </p>
                            <p className="font-serif text-2xl">
                                <InlineMath>
                                    {message.body}
                                </InlineMath>
                            </p>
                        </div>
                    )
                })
            }
            </div>
        </RecoilRoot>
    )
}
  