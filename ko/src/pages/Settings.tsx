import React from "react";
import { useNavigate } from "react-router-dom";

//마이페이지 화면임
export default function SettingsPage() {
    const navigate = useNavigate();
  type NotificationSetting = [string, string, boolean];

  const settings: NotificationSetting[] = [
    ["연결 요청", "다른 사람이 연결 요청을 보내면 알림을 받습니다", true],
    ["연결 수락", "연결을 수락하면 알림을 받습니다", true],
    ["메시지", "새로운 메시지가 오면 알림을 받습니다", true],
    ["멘션", "누군가가 당신을 멘션하거나 코멘트를 달면 알림을 받습니다", true],
    ["시스템 업데이트", "시스템 업데이트 시 알림을 받습니다", false],
    ["마케팅 광고", "새로운 광고 알림이 있으면 알림을 받습니다", false],
  ];

  return (
    <div className="flex h-screen bg-black text-white">
      {/* 사이드바 */}
      <div className="w-64 bg-black p-4 flex flex-col gap-4 border border-white/20">
        <h1 className="text-4xl font-bold" onClick={() => navigate("/")}>kobweb</h1>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-2">마이페이지</h1>
        <p className="text-sm text-zinc-400 mb-8">계정관리</p>

        {/* General Settings */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">일반 설정</h2>
          <p className="text-sm text-zinc-400 mb-4">회원정보 관리</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm">이름</label>
              <input
                type="text"
                className="w-full mt-1 p-2 rounded bg-zinc-800 border border-zinc-700"
                value="John Doe"
              />
            </div>
            <div>
              <label className="text-sm">이메일 주소</label>
              <input
                type="email"
                className="w-full mt-1 p-2 rounded bg-zinc-800 border border-zinc-700"
                value="john.doe@example.com"
              />
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between p-4 rounded bg-zinc-800">
            <div>
              <div className="font-medium">이메일 알림</div>
              <div className="text-sm text-zinc-400">중요한 이메일 알림을 받습니다</div>
            </div>
            <input type="checkbox" defaultChecked className="form-toggle" />
          </div>
        </section>

        {/* Notification Preferences */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">알림 설정</h2>
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
          <h2 className="text-2xl font-semibold mb-4">언어 설정</h2>
          <p className="text-sm text-zinc-400 mb-4">사용할 언어를 설정하세요</p>
          <select className="w-full max-w-sm p-2 rounded bg-zinc-800 border border-zinc-700 mb-8">
            <option>🇺🇸 English</option>
            <option>🇰🇷 Korean</option>
            <option>🇯🇵 Japanese</option>
          </select>

          <h2 className="text-2xl font-semibold mb-4">보안 설정</h2>
          <p className="text-sm text-zinc-400 mb-4">계정 보안 관리</p>
          <div className="space-y-4 mb-4">
            <input type="password" placeholder="Current Password" className="w-full max-w-sm p-2 rounded bg-zinc-800 border border-zinc-700" />
            <div className="grid grid-cols-2 gap-4">
              <input type="password" placeholder="New Password" className="w-full p-2 rounded bg-zinc-800 border border-zinc-700" />
              <input type="password" placeholder="Confirm New Password" className="w-full p-2 rounded bg-zinc-800 border border-zinc-700" />
            </div>
            <div className="flex items-center justify-between p-4 rounded bg-zinc-800">
              <div>
                <div className="font-medium">2단계 인증 여부</div>
                <div className="text-sm text-zinc-400">계정 보안을 위해 2단계 인증을 원한다면 체크합니다</div>
              </div>
              <input type="checkbox" className="form-toggle" />
            </div>
            <div className="flex items-center justify-between p-4 rounded bg-zinc-800">
              <div>
                <div className="font-medium">로그인 알림</div>
                <div className="text-sm text-zinc-400">계정에 로그인할 때마다 알림을 보냅니다</div>
              </div>
              <input type="checkbox" defaultChecked className="form-toggle" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">화면 설정</h2>
          <p className="text-sm text-zinc-400 mb-4">화면에 대한 설정을 선택해주세요</p>
          <div className="mb-6">
            <div className="mb-2 font-medium">화면 모드</div>
            <div className="flex gap-4">
              <button className="p-4 bg-zinc-900 border border-blue-500 rounded text-sm">Dark</button>
              <button className="p-4 bg-white text-black rounded text-sm">Light</button>
              <button className="p-4 bg-zinc-700 rounded text-sm">System</button>
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-2 font-medium">글자 크기</div>
            <select className="w-full max-w-sm p-2 rounded bg-zinc-800 border border-zinc-700">
              <option>Small</option>
              <option selected>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-4 rounded bg-zinc-800 mb-2">
            <div>
              <div className="font-medium">애니메이션 줄이기</div>
              <div className="text-sm text-zinc-400">인터페이스 전체에서 모션 효과를 최소화합니다.</div>
            </div>
            <input type="checkbox" className="form-toggle" />
          </div>
          <div className="flex items-center justify-between p-4 rounded bg-zinc-800">
            <div>
              <div className="font-medium">고대비 모드</div>
              <div className="text-sm text-zinc-400">화면의 가시성을 높이려면 대비를 높입니다</div>
            </div>
            <input type="checkbox" className="form-toggle" />
          </div>
        </section>

        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
            설정 저장
          </button>
        </div>
      </main>
    </div>
  );
}