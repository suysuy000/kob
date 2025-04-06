import { FaUser, FaNetworkWired, FaEnvelope, FaBell, FaCog, FaGithub, FaStickyNote, FaComments } from "react-icons/fa";
import NetworkView from "../components/TreePage";
import { useNavigate } from "react-router-dom";


const BusinessCardPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex h-screen bg-black text-white">
      {/* 사이드바 */}
      <div className="w-64 bg-black p-4 flex flex-col gap-4 border border-white/20">
        <h1 className="text-4xl font-bold" onClick={() => navigate("/")}>kobweb</h1>
        <nav className="flex flex-col gap-2 text-xl">
          <button className="flex items-center gap-2 p-2 rounded bg-gray-700">
            <FaUser /> 내 명함관리
          </button>
          <button onClick={() => navigate("/network")} className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            <FaNetworkWired /> 명함 관계도
          </button>
          <button onClick={() => navigate("/ms")}className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
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

      {/* 메인 컨텐츠 */}
      <div className="flex flex-1 flex-col p-4">
        {/* 🔍 검색창 & 필터 버튼 */}
        <div className="mb-4 flex items-center gap-2">
          <input type="text" placeholder="Search..." className="flex-1 p-2 bg-gray-950 rounded border border-white/20" />
          <button className="px-3 py-1 bg-black rounded border border-white/20 hover:bg-gray-600">All Companies</button>
          <button className="px-3 py-1 bg-black rounded border border-white/20 hover:bg-gray-600">Departments</button>
          <button className="px-3 py-1 bg-black rounded border border-white/20 hover:bg-red-600">Reset Filter</button>
        </div>

        <div className="flex gap-4">
          {/* 명함 카드 */}
          <div className="bg-black p-6 rounded-lg w-80 border border-white/20">
            <div className="flex justify-between items-center">
              <span className="text-green-400">Mark</span>
              <button className="flex items-center gap-1 px-3 py-1 border border-gray-700 rounded-lg">
                <FaComments className="w-4 h-4" /> Messages
              </button>
            </div>

            <p className="text-gray-400 text-sm">Product Designer</p>

            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>Email</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub />
                <span>Github</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStickyNote />
                <span>Notion</span>
              </div>
            </div>

            <p className="mt-4 font-bold">Skills</p>
            <div className="mt-2 flex gap-2">
              <span className="px-3 py-1 bg-gray-700 rounded text-sm">UI/UX</span>
              <span className="px-3 py-1 bg-gray-700 rounded text-sm">Figma</span>
            </div>
          </div>
        </div>
        <NetworkView />
      </div>
    </div>
  );
};

export default BusinessCardPage;
