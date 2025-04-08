import { Bell, MessageCircle, UserPlus, Globe, Search } from "lucide-react";
import { FaUser, FaNetworkWired, FaEnvelope, FaBell, FaCog, FaGithub, FaStickyNote, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NotificationsPage() {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-screen bg-black text-white font-sans overflow-hidden">
        {/* 사이드바 */}
        <div className="w-64 bg-black p-4 flex flex-col gap-4 border border-white/20">
            <h1 className="text-4xl font-bold" onClick={() => navigate("/")}>kobweb</h1>
            <nav className="flex flex-col gap-2 text-xl">
            <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
                <FaUser /> 내 명함관리
            </button>
            <button onClick={() => navigate("/network")} className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
                <FaNetworkWired /> 명함 관계도
            </button>
            <button onClick={() => navigate("/ms")}className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
                <FaEnvelope /> 메시지
            </button>
            <button onClick={() => navigate("/noti")} className="flex items-center gap-2 p-2 rounded bg-gray-700">
                <FaBell /> 알림
            </button>
            <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
                <FaCog /> 설정
            </button>
            </nav>
        </div>

        {/* Header Bar */}
        <div className="fixed top-0 right-0 w-[calc(100%-256px)] h-12 bg-black border-b border-gray-800 flex items-center justify-end px-6 gap-4 z-20">
            <Search className="w-5 h-5 text-gray-400 cursor-pointer" />
            <Globe className="w-5 h-5 text-gray-400 cursor-pointer" />
            <Bell className="w-5 h-5 text-white cursor-pointer" />
            <img src="https://i.pravatar.cc/40" alt="profile" className="w-8 h-8 rounded-full" />
        </div>

        {/* Main Content */}
        <main className="flex-1 pt-16 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="text-xl font-bold">알림 <span className="text-blue-500">4</span></h2>
                <p className="text-sm text-gray-400">전체 알림 10개, 안 읽은 알림 4개</p>
            </div>
            <div className="flex items-center gap-2">
                <button className="text-sm text-white border border-white px-3 py-1 rounded">모두 읽음 표시</button>
                <button className="text-sm text-black bg-white px-3 py-1 rounded">전체</button>
                <button className="text-sm text-white border border-white px-3 py-1 rounded">안 읽음</button>
                <button className="text-sm text-white p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M18.72 18.72l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M18.72 5.28l1.061-1.061" />
                </svg>
                </button>
            </div>
            </div>

            <div className="space-y-4">
            {[{
                user: "Chris Ahn",
                time: "2m ago",
                message: "Wants to connect with you. You have 3 mutual connections.",
                type: "connect",
                unread: true,
                },
                {
                user: "Sarah Kim",
                time: "1h ago",
                message: "Just sent you a new message: 'Hey, I wanted to discuss the project we talked about yesterday…'",
                type: "message",
                unread: true,
                },
                {
                user: "Team Project",
                time: "3h ago",
                message: "Anna mentioned you in a comment: '@user please review the latest changes to the design'",
                type: "mention",
                unread: true,
                },
                {
                user: "System Update",
                time: "5h ago",
                message: "The platform will be undergoing maintenance tonight from 2–4 AM EST.",
                type: "system",
                unread: true,
                },
                {
                user: "Amy Lee",
                time: "1d ago",
                message: "Wants to connect with you. You have 5 mutual connections.",
                type: "connect",
                unread: false,
                },
                {
                user: "Sam Wilson",
                time: "1d ago",
                message: "Replied to your comment: 'Thanks for the feedback! I'll implement those changes right away.'",
                type: "reply",
                unread: false,
                },
                {
                user: "Design Team",
                time: "2d ago",
                message: "Jessica mentioned you in the design channel: '@user can you share your thoughts on the new color palette?'",
                type: "mention",
                unread: false,
                }
            ].map((item, index) => (
                <div key={index} className={`bg-[#1a1a1a] p-4 rounded-lg ${item.unread ? 'border border-gray-800' : ''}`}>
                <div className="flex justify-between items-start">
                    <div>
                    <div className="font-semibold text-white flex items-center gap-2">
                        {item.user}
                        {item.unread && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                        )}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">{item.message}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.time}</div>
                    </div>
                    {item.type === "connect" && (
                    <div className="space-x-2">
                        <button className="bg-white text-black text-xs px-3 py-1 rounded">Accept</button>
                        <button className="border border-white text-white text-xs px-3 py-1 rounded">Decline</button>
                    </div>
                    )}
                </div>
                </div>
            ))}
            </div>
        </main>
        </div>
    );
    }
