import React from "react";
import { useNavigate } from "react-router-dom";

const Resume: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* 사이드바 */}
      <div className="w-64 bg-black p-4 flex flex-col gap-4 border border-white/20">
        <h1 className="text-4xl font-bold" onClick={() => navigate("/")}>kobweb</h1> {/* 더 크게 */}
        <nav className="flex flex-col gap-2 text-xl"> {/* 전체 메뉴 글씨 키움 */}
          <button className="flex items-center gap-2 p-2 rounded bg-gray-700" onClick={() => navigate("/resume")}>
            이력서
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700" onClick={() => navigate("/resumehub")}>
            이력서 몰아보기
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            메시지
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            설정
          </button>
        </nav>
      </div>

      
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Profile Card */}
        <div className="bg-gray-800 p-6 rounded-lg relative">
          <h1 className="text-xl font-bold">Mark Johnson</h1>
          <p className="text-gray-400">Senior Product Designer</p>
          <div className="mt-4">
            <span className="bg-gray-700 px-3 py-1 rounded-lg">UX/UI Design</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg ml-2">Product Strategy</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg ml-2">Team Leadership</span>
          </div>
          <div className="absolute top-6 right-6 flex space-x-4">
            <button className="px-4 py-2 bg-gray-700 rounded-lg">메시지</button>
            <button className="px-4 py-2 bg-blue-600 rounded-lg">연결</button>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="mt-6 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-lg font-semibold">경력</h2>
          <div className="mt-4">
            <h3 className="font-bold">Senior Product Designer</h3>
            <p className="text-gray-400">Tech Corp (2020 - Present)</p>
            <p className="text-gray-400">San Francisco, CA</p>
            
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Product Designer</h3>
            <p className="text-gray-400">Design Studio (2018 - 2020)</p>
            <p className="text-gray-400">New York, NY</p>
            
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-6 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-lg font-semibold">학력</h2>
          <div className="mt-4">
            <h3 className="font-bold">Master of Design</h3>
            <p className="text-gray-400">Design University (2016 - 2018)</p>
            <p className="text-gray-400">Boston, MA</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-lg font-semibold">스킬</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-gray-700 px-3 py-1 rounded-lg">UI/UX Design</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Product Strategy</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">User Research</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Prototyping</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Design Systems</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Team Leadership</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Figma</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">Adobe Creative Suite</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
