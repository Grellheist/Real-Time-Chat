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
        socket.emit("createdMessage", { author: chosenUsername, message });
        setMessages((currentMsg) => [
            ...currentMsg,
            { author: chosenUsername, message },
        ]);
        setMessage("");
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
                    <h3 className="dark:text-white flex-col">
                        Choose your username
                    </h3>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            setChosenUsername(username);
                        }}
                        className="text-white font-bold py-2 px-4 rounded-full bg-blue-500 hover:bg-blue-700 flex-col"
                    >
                        Enter
                    </button>
                </>
            ) : (
                <>
                    <p >
                        Your username: {username}
                    </p>
                    <div >
                        <div >
                            {messages.map((msg, i) => {
                                return (
                                    <div
                                        key={i}
                                    >
                                        {msg.author} : {msg.message}
                                    </div>
                                );
                            })}
                        </div>
                        <div >
                            <input
                                type="text"
                                placeholder="New message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyUp={handleKeypress}
                            />
                            <div >
                                <button
                                    onClick={() => {
                                        sendMessage();
                                    }}
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
