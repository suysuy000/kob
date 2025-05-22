import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CR = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    address: "",
    website: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <header className="absolute top-0 left-0 p-6">
        <h1 className="text-white text-4xl font-bold hover:text-gray-300" onClick={() => navigate("/")}>
          kobweb
        </h1>
      </header>

      <div className="w-full max-w-5xl flex gap-6">
        {/* Form Section */}
        <div className="bg-zinc-900 p-6 rounded-lg flex-1">
          <h1 className="text-xl font-bold text-blue-400 mb-4">명함 등록</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">이름</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">이메일</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">번호</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">회사명</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-2 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">직급</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full p-2 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">주소</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">포트폴리오 사이트</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full p-2 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">추가 설명</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none"
                rows={3}
              />
            </div>
            <button onClick={() => navigate("/bs")} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md">
              등록
            </button>
          </form>
        </div>

        {/* Business Card Preview */}
        <div className="bg-zinc-900 p-6 rounded-lg w-80 flex flex-col gap-4">
          <div className="bg-zinc-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold">{formData.name || "이름"}</h2>
            <p className="text-blue-400">{formData.position || "직업"}</p>
            <p className="text-gray-400">{formData.company || "회사명"}</p>
          </div>
          <p className="text-sm text-gray-400">
            명함프리뷰. 양식을 작성하시면 명함이 자동으로 업데이트됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CR;
