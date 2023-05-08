import io from "socket.io-client";
import { useState, useEffect } from "react";

let socket;

type Message = {
    author: string;
    message: string;
};

export default function Home() {
    const ENTER = 13;
    const [username, setUsername] = useState("");
    const [chosenUsername, setChosenUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Array<Message>>([]);

    useEffect(() => {
        socketInitializer();
    }, []);

    const socketInitializer = async () => {
        await fetch("/api/socket");

        socket = io();

        socket.on("newIncomingMessage", (msg) => {
            setMessages((currentMsg) => [
                ...currentMsg,
                { author: msg.author, message: msg.message },
            ]);
            console.log(messages);
        });
    };

    const sendMessage = async () => {
        if (message !== "") {
            socket.emit("createdMessage", { author: chosenUsername, message });
            setMessages((currentMsg) => [
                ...currentMsg,
                { author: chosenUsername, message },
            ]);
            setMessage("");
        }
    };

    const handleKeypress = (e) => {
        if (e.keyCode === ENTER) {
            if (message) {
                sendMessage();
            }
        }
    };

    return (
        <div className="dark:bg-slate-800 flex items-center p-4 mx-auto min-h-screen justify-center flex-col" >
            {!chosenUsername ? (
                <>
                    <h3 className="dark:text-white text-2xl font-semibold text-center text-slate-900 mb-8">
                        What is your name?
                    </h3>
                    <div className="flex flex-row">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="rounded-md"
                        />
                        <button
                            onClick={() => {
                                setChosenUsername(username);
                            }}
                            className="text-white font-bold py-2 px-4 ml-2 rounded-md bg-violet-600 hover:bg-violet-700 "
                        >
                            Enter
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <p className="dark:text-white text-2xl font-semibold text-center text-slate-900 mb-8">
                        Hello, {username}!
                    </p>
                    <div className="flex flex-col">
                        <div >
                            {messages.map((msg, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="text-white"
                                    >
                                        {msg.author}: {msg.message}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-row">
                            <input
                                type="text"
                                placeholder="New message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyUp={handleKeypress}
                                className="rounded-md"
                            />
                            <div >
                                <button
                                    onClick={() => {
                                        sendMessage()
                                    }}
                                    className="text-white font-bold ml-2 py-2 px-4 rounded-md bg-violet-600 hover:bg-violet-700 "
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
