import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* 사이드바 */}
      <div className="w-64 bg-black p-4 flex flex-col gap-4 border border-white/20">
        <h1 className="text-xl font-bold">kobweb</h1>
        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-2 p-2 rounded bg-gray-700">
            My resume
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            Resume hub
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            Messages
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            Settings
          </button>
        </nav>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Profile Card */}
        <div className="bg-gray-800 p-6 rounded-lg relative">
          <h1 className="text-xl font-bold">Sarah Johnson</h1>
          <p className="text-gray-400">Senior Product Designer</p>
          <div className="mt-4">
            <span className="bg-gray-700 px-3 py-1 rounded-lg">UX/UI Design</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg ml-2">Product Strategy</span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg ml-2">Team Leadership</span>
          </div>
          <div className="absolute top-6 right-6 flex space-x-4">
            <button className="px-4 py-2 bg-gray-700 rounded-lg">Message</button>
            <button className="px-4 py-2 bg-blue-600 rounded-lg">Connect</button>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="mt-6 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="mt-4">
            <h3 className="font-bold">Senior Product Designer</h3>
            <p className="text-gray-400">Tech Corp (2020 - Present)</p>
            <p className="text-gray-400">San Francisco, CA</p>
            <p className="mt-2">Led the redesign of core products resulting in 40% increase in user engagement.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Product Designer</h3>
            <p className="text-gray-400">Design Studio (2018 - 2020)</p>
            <p className="text-gray-400">New York, NY</p>
            <p className="mt-2">Collaborated with cross-functional teams to deliver user-centered design solutions.</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-6 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="mt-4">
            <h3 className="font-bold">Master of Design</h3>
            <p className="text-gray-400">Design University (2016 - 2018)</p>
            <p className="text-gray-400">Boston, MA</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Skills</h2>
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
