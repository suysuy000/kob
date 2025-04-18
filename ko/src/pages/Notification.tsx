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
            <button onClick={() => navigate("/bs")} className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
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
                <p className="text-sm text-gray-400">전체 알림 7개, 안 읽은 알림 4개</p>
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
                time: "2분 전",
                message: "당신과 연결을 하고 싶어합니다. 3개의 공통커넥션이 있습니다.",
                type: "connect",
                unread: true,
                },
                {
                user: "Sarah Kim",
                time: "1시간 전",
                message: "새로운 메시지가 있습니다: '어제 얘기했었던 프로젝트에 대해서 말이야...'",
                type: "message",
                unread: true,
                },
                {
                user: "팀 프로젝트",
                time: "3시간 전",
                message: "Anna가 댓글에서 당신을 언급했습니다. '@user 디자인의 변경 사항을 검토해주세요.'",
                type: "mention",
                unread: true,
                },
                {
                user: "시스템 업데이트",
                time: "5시간 전",
                message: " 해당 플랫폼은 오늘 밤 오전 2시부터 4시까지 유지 관리 작업을 진행합니다.",
                type: "system",
                unread: true,
                },
                {
                user: "Amy Lee",
                time: "1일 전",
                message: "당신과 연결을 하고 싶어합니다. 5개의 공통 커넥션이 있습니다.",
                type: "connect",
                unread: false,
                },
                {
                user: "Sam Wilson",
                time: "1일 전",
                message: "내 댓글에 답글을 남겼습니다: '피드백 주셔서 감사합니다! 변경사항을 바로 적용하겠습니다.'",
                type: "reply",
                unread: false,
                },
                {
                user: "Design Team",
                time: "2일 전",
                message: "Jessica가 디자인 채널에서 당신을 언급했습니다: '@user, 새로운 색상 팔레트에 대한 생각을 공유해 주시겠어요?'",
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
                        <button className="bg-white text-black text-xs px-3 py-1 rounded">수락</button>
                        <button className="border border-white text-white text-xs px-3 py-1 rounded">거절</button>
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
