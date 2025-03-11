import React from "react";
import ChatBox from "../../components/ui/chatbox/ChatBox";
import groupImage1 from "../../assets/images/group-image1.png";
import groupImage2 from "../../assets/images/group-image2.png";
import groupImage3 from "../../assets/images/group-image3.png";

import peopleImage1 from "../../assets/images/people-image1.png";
import peopleImage2 from "../../assets/images/people-image3.png";
import peopleImage3 from "../../assets/images/people-image2.png";
import phone from "../../assets/icon/phone.svg";
import video_call from "../../assets/icon/video-call.svg";
import more from "../../assets/icon/more-blue.svg";


const GroupChatData = [
  {
    id: 1,
    profileImage: groupImage1,
    name: "Friends Forever",
    message: "Hahahahah!",
    time: "Today, 9:52pm",
    unreadCount: 1,
  },
  {
    id: 2,
    profileImage: groupImage2,
    name: "Doctor Groups",
    message: "Hahahahah!",
    time: "Yesterday, 12:31pm",
    unreadCount: 0,
  },
  {
    id: 3,
    profileImage: groupImage3,
    name: "Doctor Groups",
    message: "Hahahahah!",
    time: "Wednesday, 9:12am",
    unreadCount: 0,
  },
];

const PeopleChatData = [
  {
    id: 1,
    profileImage: peopleImage1,
    name: "Prakash Pathak",
    message: "Hahahahah!",
    time: "Today, 9:52pm",
    unreadCount: 0,
    isRead: true,
  },
  {
    id: 2,
    profileImage: peopleImage2,
    name: "Eten Hunt",
    message: "Appointment Booking",
    time: "Today, 12:11pm",
    unreadCount: 1,
    isRead: false,
  },
  {
    id: 3,
    profileImage: peopleImage3,
    name: "John Doe",
    message: "Hahahahah!",
    time: "Today, 2:40pm",
    unreadCount: 2,
    isRead: false,
  },
  {
    id: 4,
    profileImage: peopleImage1,
    name: "Jakob Seris",
    message: "Nevermind bro",
    time: "Yesterday, 12:31pm",
    unreadCount: 5,
    isRead: false,
  },
  {
    id: 5,
    profileImage: peopleImage2,
    name: "Nadia Lauren",
    message: "Okay, brother. let's see...",
    time: "Wednesday, 11:12am",
    unreadCount: 0,
    isRead: true,
  },
];

const ChatListItem = ({ profileImage, name, message, time, unreadCount }) => {
  return (
    <div className="flex items-center justify-between p-2 lg:p-3 border-b border-b-[#D9D9D9A8] cursor-pointer hover:bg-gray-100 transition">
      <div className="flex items-center gap-2 lg:gap-5">
        <img
          src={profileImage}
          alt={name}
          className=" w-10 h-10  lg:w-12 lg:h-12 rounded-full object-cover"
        />

        <div>
          <h4 className=" text-base xl:text-lg text-[#303030] font-semibold">
            {name}
          </h4>
          <p className="text-sm xl:text-base font-light text-gray-500 truncate w-40">
            {message}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span className=" text-xs xl:text-base font-light text-end text-[#7C7C7C]">
          {time}
        </span>
        {unreadCount > 0 && (
          <div className="bg-blue-500 text-white text-xs font-bold w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center rounded-full mt-1">
            {unreadCount}
          </div>
        )}
      </div>
    </div>
  );
};

const ChatScreen = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <div className="flex flex-col gap-6 w-full">
        <div className="w-full rounded-3xl border border-[#00000033]    bg-white shadow-lg p-3 lg:p-4">
          <h1 className=" text-xl lg:text-2xl font-bold">Groups</h1>
          {GroupChatData.map((chat) => (
            <ChatListItem key={chat.id} {...chat} />
          ))}
        </div>
        <div className="  rounded-3xl border border-[#00000033]  w-full p-3  bg-white shadow-lg xl:p-4">
          <h3 className=" text-xl lg:text-2xl font-bold">People</h3>
          {PeopleChatData.map((chat) => (
            <ChatListItem key={chat.id} {...chat} />
          ))}
        </div>
      </div>
      <div className="w-full h-full ">
        <ChatBox />
      </div>
    </div>
  );
};

export default ChatScreen ;
