import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaNetworkWired, FaEnvelope, FaBell, FaCog, FaGithub, FaStickyNote, FaComments } from "react-icons/fa";

export default function SettingsPage() {
    const navigate = useNavigate();
  type NotificationSetting = [string, string, boolean];

  const settings: NotificationSetting[] = [
    ["Connection requests", "Receive notifications when someone sends you a connection request", true],
    ["Connection accepted", "Receive notifications when someone accepts your connection request", true],
    ["Messages", "Receive notifications when you get a new message", true],
    ["Mentions", "Receive notifications when someone mentions you in a comment", true],
    ["System updates", "Receive notifications about system updates and maintenance", false],
    ["Marketing", "Receive notifications about new features and promotions", false],
  ];

  return (
    <div className="flex h-screen bg-black text-white">
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
          <button onClick={() => navigate("/noti")} className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
            <FaBell /> 알림
          </button>
          <button onClick={() => navigate("/set")} className="flex items-center gap-2 p-2 rounded bg-gray-700">
            <FaCog /> 설정
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-sm text-zinc-400 mb-8">Manage your account settings and preferences</p>

        {/* General Settings */}
        <section className="mb-10">
          <h2 className="font-semibold mb-4">General Settings</h2>
          <p className="text-sm text-zinc-400 mb-4">Update your account details and preferences</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm">Display Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 rounded bg-zinc-800 border border-zinc-700"
                value="John Doe"
              />
            </div>
            <div>
              <label className="text-sm">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 p-2 rounded bg-zinc-800 border border-zinc-700"
                value="john.doe@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm">Bio</label>
            <textarea
              className="w-full mt-1 p-2 rounded bg-zinc-800 border border-zinc-700"
              rows={3}
              defaultValue="Frontend developer passionate about UI/UX design and modern web technologies."
            />
          </div>
          <div className="mt-4 flex items-center justify-between p-4 rounded bg-zinc-800">
            <div>
              <div className="font-medium">Email Notifications</div>
              <div className="text-sm text-zinc-400">Receive email notifications for important updates</div>
            </div>
            <input type="checkbox" defaultChecked className="form-toggle" />
          </div>
        </section>

        {/* Notification Preferences */}
        <section className="mb-10">
          <h2 className="font-semibold mb-2">Notification Preferences</h2>
          <p className="text-sm text-zinc-400 mb-4">Choose which notifications you want to receive</p>
          {settings.map(([title, desc, checked], idx) => (
            <div key={idx} className="flex items-center justify-between p-4 mb-2 rounded bg-zinc-800">
              <div>
                <div className="font-medium">{title}</div>
                <div className="text-sm text-zinc-400">{desc}</div>
              </div>
              <input type="checkbox" defaultChecked={checked} className="form-toggle" />
            </div>
          ))}
        </section>

        {/* New Section: Language, Security, and Appearance Settings */}
        <section className="mb-10">
          <h2 className="font-semibold mb-4">Language Settings</h2>
          <p className="text-sm text-zinc-400 mb-4">Choose your preferred language</p>
          <select className="w-full max-w-sm p-2 rounded bg-zinc-800 border border-zinc-700 mb-8">
            <option>🇺🇸 English</option>
            <option>🇰🇷 Korean</option>
            <option>🇯🇵 Japanese</option>
          </select>

          <h2 className="font-semibold mb-4">Security Settings</h2>
          <p className="text-sm text-zinc-400 mb-4">Manage your account security</p>
          <div className="space-y-4 mb-4">
            <input type="password" placeholder="Current Password" className="w-full max-w-sm p-2 rounded bg-zinc-800 border border-zinc-700" />
            <div className="grid grid-cols-2 gap-4">
              <input type="password" placeholder="New Password" className="w-full p-2 rounded bg-zinc-800 border border-zinc-700" />
              <input type="password" placeholder="Confirm New Password" className="w-full p-2 rounded bg-zinc-800 border border-zinc-700" />
            </div>
            <div className="flex items-center justify-between p-4 rounded bg-zinc-800">
              <div>
                <div className="font-medium">Two-Factor Authentication</div>
                <div className="text-sm text-zinc-400">Add an extra layer of security to your account</div>
              </div>
              <input type="checkbox" className="form-toggle" />
            </div>
            <div className="flex items-center justify-between p-4 rounded bg-zinc-800">
              <div>
                <div className="font-medium">Login Notifications</div>
                <div className="text-sm text-zinc-400">Get notified when someone logs into your account</div>
              </div>
              <input type="checkbox" defaultChecked className="form-toggle" />
            </div>
          </div>

          <h2 className="font-semibold mb-4">Appearance Settings</h2>
          <p className="text-sm text-zinc-400 mb-4">Customize how the application looks</p>
          <div className="mb-6">
            <div className="mb-2 font-medium">Theme</div>
            <div className="flex gap-4">
              <button className="p-4 bg-zinc-900 border border-blue-500 rounded text-sm">Dark</button>
              <button className="p-4 bg-white text-black rounded text-sm">Light</button>
              <button className="p-4 bg-zinc-700 rounded text-sm">System</button>
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-2 font-medium">Font Size</div>
            <select className="w-full max-w-sm p-2 rounded bg-zinc-800 border border-zinc-700">
              <option>Small</option>
              <option selected>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-4 rounded bg-zinc-800 mb-2">
            <div>
              <div className="font-medium">Reduce Animations</div>
              <div className="text-sm text-zinc-400">Minimize motion effects throughout the interface</div>
            </div>
            <input type="checkbox" className="form-toggle" />
          </div>
          <div className="flex items-center justify-between p-4 rounded bg-zinc-800">
            <div>
              <div className="font-medium">High Contrast Mode</div>
              <div className="text-sm text-zinc-400">Increase contrast for better visibility</div>
            </div>
            <input type="checkbox" className="form-toggle" />
          </div>
        </section>

        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
            Save All Settings
          </button>
        </div>
      </main>
    </div>
  );
}
