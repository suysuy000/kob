import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  isResumeCards?: boolean;
}

const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: '안녕하세요! 무엇을 도와드릴까요?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = { text: trimmed, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    if (trimmed === 'react 3년 이상 경력을 가지고 있는 개발자를 찾아줘') {
      const botMessage: Message = {
        text: '',
        sender: 'bot',
        isResumeCards: true,
      };
      setMessages(prev => [...prev, botMessage]);
    } else {
      setTimeout(() => {
        const botMessage: Message = {
          text: `"${trimmed}"에 대한 정보를 찾고 있어요!`,
          sender: 'bot',
        };
        setMessages(prev => [...prev, botMessage]);
      }, 700);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-gray-800 text-white rounded-lg shadow-xl flex flex-col z-50">
          <div className="border-b-2 border-blue-400 p-4 bg-gray-800 px-4 py-2 text-white font-bold rounded-t-lg flex justify-between items-center">
            Chatbot
            <button onClick={toggleChat} className="text-white text-xl font-bold">×</button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 max-h-[400px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.isResumeCards ? (
                  <div className="space-y-2 text-sm">
                    {[
                      {
                        name: '김민준',
                        role: 'Frontend Developer',
                        school: 'Yonsei University, Computer Science',
                      },
                      {
                        name: '이승호',
                        role: 'Full Stack Developer',
                        school: 'Seoul National University, Information Technology',
                      },
                      {
                        name: 'Mark',
                        role: 'Frontend Engineer',
                        school: 'New York University, Software Engineering',
                      },
                    ].map((resume, idx) => (
                      <div key={idx} className="bg-gray-100 text-gray-900 p-3 rounded shadow text-left space-y-1">
                        <div className="font-semibold">{resume.name}</div>
                        <div className="text-blue-600 underline">{resume.role}</div>
                        <div className="text-gray-700">{resume.school}</div>
                      </div>
                    ))}
                    <div className="text-xs text-gray-400 mt-2">20:55</div>
                  </div>
                ) : (
                  <div
                    className={`px-4 py-2 rounded-lg max-w-[75%] text-sm break-words ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white self-end'
                        : 'bg-gray-700 text-gray-100 self-start'
                    }`}
                  >
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center p-2 border-t border-gray-700">
            <input
              type="text"
              placeholder="메시지를 입력하세요"
              className="flex-1 p-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none text-sm"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={sendMessage} className="ml-2 p-2 bg-blue-600 rounded-full text-white">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <img src="/chatbot-icon.png" alt="Chatbot" className="w-9 h-9" />
      </button>
    </>
  );
};

export default ChatbotButton;
