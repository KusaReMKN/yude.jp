import { useEffect, useState } from "react";
import { currentPage, Pages } from "./VerticalMenu"
import { RecoilRoot, useRecoilState } from 'recoil'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { formatDistance } from 'date-fns'
import { ja } from 'date-fns/locale/ja'
import { InlineMath } from 'react-katex';
import Markdown from 'react-markdown';

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
                    setBody("");
                } else {
                    await showAlert("送信するときになんらかの問題が発生しました。" + text);
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
            <div className={`w-1/2 absolute flex items-center p-4 text-sm border border-gray-300 rounded-lg bg-gray-800 text-gray-300 border-gray-600${alert === "" ? ` hidden` : ``}`} role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div>
                    {alert}
                </div>
            </div>
            <div className="text-wrap max-w-xl">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white">
                        名前{" "}
                        <span className="text-orange-400">*</span>
                    </label>
                    <input type="text" id="name" className="w-full block p-4 border rounded-lg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" value={name} onChange={updateName} placeholder="Hatsune Mike" />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white">
                        本文{" "}
                        <span className="text-orange-400">*</span>
                    </label>
                    <textarea id="body" rows={4} className="font-serif text-2xl w-full block p-2.5 rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="言い残したいことは？" value={body} onChange={updateBody}></textarea>
                </div>
                <button
                    onClick={submit}
                    type="button"
                    className={`w-full text-xl text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800${ name === "" || body === "" ? " opacity-20" : ""}`}
                    disabled={name === "" || body === ""}
                >
                    <FontAwesomeIcon icon={faPaperPlane} />{" "}送信
                </button>
            </div>

            <div className="overflow-auto max-h-96 mt-5 rounded-lg max-w-xl">
            {
                messages &&
                messages.map((message, index) => {
                    return (
                        <div key={index} className="p-6 border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 mb-2">
                            <p className="font-medium opacity-80">
                                {message.name} さん,{" "}
                                {
                                    formatDistance(Date.parse(message.createdAt), new Date(), { addSuffix: true, locale: ja })
                                }
                            </p>
                            <p className="font-serif text-2xl">
                                {
                                    message.body.includes("$$")
                                    ?
                                    <InlineMath>
                                        {message.body.replace(/\$\$/g, "")}
                                    </InlineMath>
                                    :
                                    <Markdown className="prose prose-xl prose-invert">
                                        {message.body}
                                    </Markdown>
                                }
                            </p>
                        </div>
                    )
                })
            }
            </div>
        </RecoilRoot>
    )
}
  