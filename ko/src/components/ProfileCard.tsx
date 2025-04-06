type Profile = {
    id: string;
    name: string;
    email: string;
    website: string;
    skills: string[];
  };
  
  type Props = {
    profile: Profile;
    onClose: () => void;
  };
  
  export default function ProfileCard({ profile, onClose }: Props) {
    return (
      <div className="absolute top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 p-6">
        <button onClick={onClose} className="text-black font-bold mb-4">
          ✕
        </button>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">{profile.name}</h2>
          <p className="text-sm text-gray-600">{profile.email}</p>
          <a
            href={profile.website}
            target="_blank"
            className="text-blue-600 underline"
          >
            {profile.website}
          </a>
          <div>
            <h3 className="font-medium mb-1">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 text-sm px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-800">
            메시지 보내기
          </button>
        </div>
      </div>
    );
  }
  