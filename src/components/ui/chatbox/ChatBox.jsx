import { Camera, Mic, Paperclip, Send, Smile } from "lucide-react";
import image from "../../../assets/images/user-image.png";
import { FaPaperPlane, FaMicrophone, FaPhone, FaVideo } from "react-icons/fa";

import React, { useState } from "react";

const messagesData = [
  { id: 1, sender: "other", text: "Hey There!", time: "8:30pm" },
  { id: 2, sender: "other", text: "How are you?", time: "8:30pm" },
  { id: 3, sender: "me", text: "Hello!", time: "8:33pm" },
  { id: 4, sender: "me", text: "I am fine and how are you?", time: "8:34pm" },
  { id: 5, sender: "other", text: "Can we meet tomorrow?", time: "8:36pm" },
  { id: 6, sender: "me", text: "Yes Sure!", time: "8:58pm" },
  { id: 7, sender: "other", text: "Okay", time: "8:36pm" },
];

const ChatBox = () => {
  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "me", text: input, time: "Now" },
      ]);
      setInput("");
    }
  };

  return (
    <>
      <div className="max-w-lg max-h-full bg-white shadow-lg overflow-hidden border border-[#00000033]  rounded-lg">
        <div className="flex items-center justify-between p-4  text-black">
          <div className="flex items-center gap-2">
            <img src={image} alt="Avatar" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">Prakash Pathak</p>
              <p className="text-xs opacity-80">Online - Last seen, 2:02pm</p>
            </div>
          </div>
          <div className="flex gap-3 text-xl">
            <FaPhone className="w-3 text-primary"/>
            <FaVideo  className="w-4 text-primary"/>
          </div>
        </div>

        <div className="p-4 h-96 sm:h-[500px] xl:h-[600px] overflow-y-auto bg-gray-100">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`rounded-lg p-3 text-sm max-w-xs ${
                  msg.sender === "me"
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
                <p className="text-xs mt-1 text-right opacity-70">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center p-3  bg-white">
          <button className=" text-primary text-lg" onClick={sendMessage}>
            <Paperclip className="w-4" />
          </button>
          <input
            type="text"
            className="flex-1 p-2  rounded-full focus:outline-none"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className=" text-blue-500 text-lg" onClick={sendMessage}>
            <FaPaperPlane className="w-4" />
          </button>
          <button className="ml-2 text-gray-500 text-lg">
            <Mic className="w-5 text-blue-500" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

