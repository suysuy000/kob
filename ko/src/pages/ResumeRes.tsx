import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumePage = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [keywords, setKeywords] = useState(["", "", ""]);

  const handleKeywordChange = (index: number, value: string) => {
    const newKeywords = [...keywords];
    newKeywords[index] = value;
    setKeywords(newKeywords);
  };

  const [aboutMe, setAboutMe] = useState("");
  const [experience, setExperience] = useState([
    { title: "", period: "", location: "", description: "" },
  ]);
  const [education, setEducation] = useState([
    { degree: "", school: "", period: "", location: "" },
  ]);
  const [skills, setSkills] = useState([""]);

  const addExperience = () => {
    setExperience([...experience, { title: "", period: "", location: "", description: "" }]);
  };

  const addEducation = () => {
    setEducation([...education, { degree: "", school: "", period: "", location: "" }]);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* 사이드바 */}
      <div className="w-64 bg-black p-4 flex flex-col gap-4 border border-white/20">
        <h1 className="text-4xl font-bold" onClick={() => navigate("/")}>kobweb</h1>
        <nav className="flex flex-col gap-2 text-xl">
          <button className="flex items-center gap-2 p-2 rounded bg-gray-700">
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
      <div className="w-3/4 p-8">
        {/* Profile Header */}
        <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-between mb-6">
          <div>
          <h2 className="text-2xl font-bold">이력서</h2>
            <input
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded"
            />
            <div className="flex gap-2 mt-2"></div>
            <input
              placeholder="직업"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded"
            />
            <div className="flex gap-2 mt-2">
              {keywords.map((kw, idx) => (
              <input
                key={idx}
                placeholder={`키워드 ${idx + 1}`}
                value={kw}
                onChange={(e) => handleKeywordChange(idx, e.target.value)}
                className="w-full p-2 bg-gray-700 rounded"
              />
            ))}
            </div>
          </div>
          <div>
            <button className="bg-gray-700 px-4 py-2 rounded mr-2">메시지</button>
            <button className="bg-white text-black px-4 py-2 rounded">연결</button>
          </div>
        </div>
        {/* About Me */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">자기소개</h2>
          <textarea
            className="w-full p-2 bg-gray-700 rounded"
            rows={3}
            placeholder="Introduce yourself..."
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </div>
        {/* Experience */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">경력</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-700 rounded">
              <input type="text" placeholder="Job Title" className="w-full bg-gray-600 p-2 mb-2 rounded" value={exp.title} onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index].title = e.target.value;
                setExperience(newExperience);
              }} />
              <input type="text" placeholder="Period" className="w-full bg-gray-600 p-2 mb-2 rounded" value={exp.period} onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index].period = e.target.value;
                setExperience(newExperience);
              }} />
              <input type="text" placeholder="Location" className="w-full bg-gray-600 p-2 mb-2 rounded" value={exp.location} onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index].location = e.target.value;
                setExperience(newExperience);
              }} />
              <textarea placeholder="Description" className="w-full bg-gray-600 p-2 rounded" rows={3} value={exp.description} onChange={(e) => {
                const newExperience = [...experience];
                newExperience[index].description = e.target.value;
                setExperience(newExperience);
              }} />
            </div>
          ))}
          <button className="bg-blue-500 px-4 py-2 rounded mt-2" onClick={addExperience}>+ 추가</button>
        </div>
        {/* Education */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">학력</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-700 rounded">
              <input type="text" placeholder="Degree" className="w-full bg-gray-600 p-2 mb-2 rounded" value={edu.degree} onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].degree = e.target.value;
                setEducation(newEducation);
              }} />
              <input type="text" placeholder="School" className="w-full bg-gray-600 p-2 rounded" value={edu.school} onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].school = e.target.value;
                setEducation(newEducation);
              }} />
            </div>
          ))}
          <button className="bg-blue-500 px-4 py-2 rounded mt-2" onClick={addEducation}>+ 추가</button>
        </div>
        {/* Skills */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">스킬</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <input key={index} type="text" placeholder="Skill" className="bg-gray-600 p-2 rounded" value={skill} onChange={(e) => {
                const newSkills = [...skills];
                newSkills[index] = e.target.value;
                setSkills(newSkills);
              }} />
            ))}
          </div>
          <button className="bg-blue-500 px-4 py-2 rounded mt-2" onClick={addSkill}>+ 추가</button>
        </div>
        <button className="bg-gray-500 px-4 py-2 rounded mt-2" onClick={() => navigate("/resume")}>이력서 등록</button>
      </div>
    </div>
  );
};

export default ResumePage;
