import { useState } from "react";
import { FaUser, FaNetworkWired, FaEnvelope, FaBell, FaCog } from "react-icons/fa";

interface Chat {
    id: number;
    name: string;
    message: string;
    time: string;
  }
const chats: Chat[] = [
    { id: 1, name: "김철수", message: "안녕하세요! 지난번 미팅 관련해서...", time: "14:30" },
    { id: 2, name: "이영희", message: "프로젝트 진행상황 공유드립니다.", time: "14:20" },
    { id: 3, name: "박지민", message: "다음 주 회의 일정 조율이 필요합니다.", time: "13:45" }
];
  

const ChatApp  = () => {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-64 bg-black p-4 flex flex-col gap-4 border border-white/20">
        <h1 className="text-xl font-bold">kobweb</h1>
        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-2 p-2 rounded bg-gray-700">
            <FaUser /> 내 명함관리
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            <FaNetworkWired /> 명함 관계도
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            <FaEnvelope /> 메시지
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            <FaBell /> 알림
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            <FaCog /> 설정
          </button>
        </nav>
      </div>
      {/* Chat List */}
      <section className="w-1/4 bg-gray-800 p-4">
        {chats.map(chat => (
          <ChatListItem key={chat.id} chat={chat} onClick={() => setSelectedChat(chat)} />
        ))}
      </section>
      
      {/* Chat Window */}
      <section className="flex-1 flex flex-col bg-gray-900 p-4">
        <div className="border-b border-gray-700 pb-2 mb-4">
          <h2 className="text-lg font-bold">{selectedChat.name}</h2>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <ChatBubble text={selectedChat.message} time={selectedChat.time} sender />
          <ChatBubble text="네, 말씀해주세요." time="14:31" />
        </div>
        <div className="p-2 border-t border-gray-700 flex items-center">
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            className="flex-1 bg-gray-800 p-2 rounded-lg focus:outline-none"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 rounded-lg">▶</button>
        </div>
      </section>
    </div>
  );
}

interface ChatListItemProps {
    chat: Chat;
    onClick: () => void;
}
function ChatListItem({ chat, onClick }: ChatListItemProps) {
  return (
    <div onClick={onClick} className="p-2 border-b border-gray-700 cursor-pointer hover:bg-gray-700">
      <p className="font-bold">{chat.name}</p>
      <p className="text-sm text-gray-400 truncate">{chat.message}</p>
    </div>
  );
}
interface ChatBubbleProps {
    text: string;
    time: string;
    sender?: boolean;
  }
function ChatBubble({ text, time, sender = false }: ChatBubbleProps) {
  return (
    <div className={`flex ${sender ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`p-2 rounded-lg max-w-xs ${sender ? "bg-blue-500" : "bg-gray-700"}`}>
        <p>{text}</p>
        <p className="text-xs text-gray-300 text-right">{time}</p>
      </div>
    </div>
  );
}

export default ChatApp;
