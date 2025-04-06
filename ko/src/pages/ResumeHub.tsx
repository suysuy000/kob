import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Resume = {
  name: string;
  role: string;
  location: string;
  likes: number;
  status: "Employed" | "Looking";
  avatar: string;
};

const resumes: Resume[] = [
  { name: "John Doe", role: "Senior Frontend Developer", location: "San Francisco, CA", likes: 24, status: "Employed", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Jane Smith", role: "UX/UI Designer", location: "New York, NY", likes: 18, status: "Looking", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Mike Johnson", role: "Full Stack Developer", location: "Austin, TX", likes: 32, status: "Employed", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Emily Brown", role: "Product Designer", location: "Seattle, WA", likes: 15, status: "Looking", avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "Chris Evans", role: "Backend Engineer", location: "Boston, MA", likes: 28, status: "Employed", avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "Sarah Connor", role: "Mobile Developer", location: "Chicago, IL", likes: 21, status: "Looking", avatar: "https://i.pravatar.cc/150?img=6" },
  { name: "David Miller", role: "DevOps Engineer", location: "Portland, OR", likes: 19, status: "Employed", avatar: "https://i.pravatar.cc/150?img=7" },
  { name: "Sophia Wilson", role: "Data Scientist", location: "Denver, CO", likes: 26, status: "Looking", avatar: "https://i.pravatar.cc/150?img=8" },
  { name: "Robert Downey", role: "Cloud Architect", location: "Miami, FL", likes: 30, status: "Employed", avatar: "https://i.pravatar.cc/150?img=9" },
  { name: "Emma Watson", role: "System Administrator", location: "Atlanta, GA", likes: 17, status: "Looking", avatar: "https://i.pravatar.cc/150?img=10" },
  { name: "Liam Neeson", role: "Security Engineer", location: "Los Angeles, CA", likes: 23, status: "Looking", avatar: "https://i.pravatar.cc/150?img=11" },
  { name: "Natalie Portman", role: "QA Engineer", location: "Houston, TX", likes: 16, status: "Looking", avatar: "https://i.pravatar.cc/150?img=12" }
];

export default function ResumeHub() {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold" onClick={() => navigate("/")}>kobweb</h1>
        <div className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </div>
      </div>
      <h2 className="text-2xl mb-4">Resume Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resumes.map((resume, index) => (
          <div key={index} onClick={() => navigate("/resume")} className="p-4 bg-gray-800 text-white rounded-lg relative">
            <div className="flex items-center space-x-4">
              <img src={resume.avatar} alt={resume.name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-xl font-semibold">{resume.role}</h3>
                <p className="text-lg opacity-70">{resume.location}</p>
                <p className="text-lg mt-2">❤️ {resume.likes} likes</p>
              </div>
            </div>
            <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${resume.status === "Employed" ? "bg-green-600" : "bg-gray-600"}`}>
              {resume.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
