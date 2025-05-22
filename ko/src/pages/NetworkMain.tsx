import { FaUser, FaNetworkWired, FaEnvelope, FaBell, FaCog, FaGithub, FaStickyNote, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Network from "../components/Network";


const NetworkPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex h-screen bg-black text-white">
      {/* 사이드바 */}
      <div className="w-64 bg-black p-4 flex flex-col gap-4 border border-white/20">
        <h1 className="text-4xl font-bold" onClick={() => navigate("/")}>kobweb</h1>
        <nav className="flex flex-col gap-2 text-xl">
          <button onClick={() => navigate("/bs")} className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            <FaUser /> 내 명함관리
          </button>
          <button onClick={() => navigate("/network")} className="flex items-center gap-2 p-2 rounded bg-gray-700">
            <FaNetworkWired /> 명함 관계도
          </button>
          <button onClick={() => navigate("/ms")}className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            <FaEnvelope /> 메시지
          </button>
          <button onClick={() => navigate("/noti")} className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            <FaBell /> 알림
          </button>
          
        </nav>
      </div>

      {/* 메인 컨텐츠 */}
      <Network/>
    </div>
  )
}

export default NetworkPage;