import { FiPhoneCall, FiMoreVertical } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";

// const ChatBox = () => {
//   const messages = [
//     { sender: "other", text: "Hey There!", time: "Today, 8:30pm" },
//     { sender: "other", text: "How are you?", time: "Today, 8:31pm" },
//     { sender: "me", text: "Hello!", time: "Today, 8:33pm" },
//     { sender: "me", text: "I am fine and how are you?", time: "Today, 8:34pm" },
//     { sender: "other", text: "Can we meet tomorrow?", time: "Today, 8:36pm" },
//     { sender: "other", text: "Okay", time: "Today, 8:36pm" },
//     { sender: "me", text: "Yes Sure!", time: "Today, 8:58pm" },
//   ];

//   return (
//     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-3">
//       {/* Header */}
//       <div className="flex items-center justify-between border-b pb-2">
//         <div className="flex items-center gap-2">
//           <img
//             src="https://randomuser.me/api/portraits/men/45.jpg" // Replace with actual profile image
//             alt="User"
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <h4 className="text-sm font-semibold">Prakash Pathak</h4>
//             <p className="text-xs text-gray-500">Online - Last seen, 2:02pm</p>
//           </div>
//         </div>
//         <div className="flex gap-2 text-gray-600">
//           <FiPhoneCall className="cursor-pointer" />
//           <FiMoreVertical className="cursor-pointer" />
//         </div>
//       </div>

//       {/* Chat Messages */}
//       <div className="h-64 overflow-y-auto p-3 space-y-2">
//         {messages.map((msg, index) => (
//           <div key={index} className={`chat ${msg.sender === "me" ? "chat-end" : "chat-start"}`}>
//             <div className={`chat-bubble ${msg.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
//               {msg.text}
//             </div>
//             <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
//           </div>
//         ))}
//       </div>

//       {/* Message Input */}
//       <div className="flex items-center border-t p-2 gap-2">
//         <button className="text-gray-500">
//           <HiOutlineEmojiHappy size={22} />
//         </button>
//         <input
//           type="text"
//           placeholder="Type your message here..."
//           className="input input-bordered w-full rounded-full"
//         />
//         <button className="btn btn-primary btn-circle">
//           <IoIosSend size={22} className="text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatBox;

import React from "react";

const ChatBox = () => {
  return (
    <>
      <div className="">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
