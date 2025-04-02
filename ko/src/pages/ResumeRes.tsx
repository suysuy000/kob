import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumePage = () => {
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
        <h1 className="text-xl font-bold">kobweb</h1>
        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-2 p-2 rounded bg-gray-700">
            My resume
          </button>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-700" onClick={() => navigate("/resumehub")}>
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
      <div className="w-3/4 p-8">
        {/* Profile Header */}
        <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Sarah Johnson</h1>
            <p className="text-gray-400">Senior Product Designer</p>
            <div className="flex gap-2 mt-2">
              <span className="bg-gray-700 px-3 py-1 rounded text-sm">UX/UI Design</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-sm">Product Strategy</span>
              <span className="bg-gray-700 px-3 py-1 rounded text-sm">Team Leadership</span>
            </div>
          </div>
          <div>
            <button className="bg-gray-700 px-4 py-2 rounded mr-2">Message</button>
            <button className="bg-white text-black px-4 py-2 rounded">Connect</button>
          </div>
        </div>
        {/* About Me */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">About Me</h2>
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
          <h2 className="text-xl font-bold mb-4">Experience</h2>
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
          <button className="bg-blue-500 px-4 py-2 rounded mt-2" onClick={addExperience}>+ Add Experience</button>
        </div>
        {/* Education */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Education</h2>
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
          <button className="bg-blue-500 px-4 py-2 rounded mt-2" onClick={addEducation}>+ Add Education</button>
        </div>
        {/* Skills */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <input key={index} type="text" placeholder="Skill" className="bg-gray-600 p-2 rounded" value={skill} onChange={(e) => {
                const newSkills = [...skills];
                newSkills[index] = e.target.value;
                setSkills(newSkills);
              }} />
            ))}
          </div>
          <button className="bg-blue-500 px-4 py-2 rounded mt-2" onClick={addSkill}>+ Add Skill</button>
        </div>
        <button className="bg-gray-500 px-4 py-2 rounded mt-2" onClick={() => navigate("/resume")}>Register</button>
      </div>
    </div>
  );
};

export default ResumePage;
