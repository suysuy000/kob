import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="text-center py-20">
        <h1 className="text-6xl font-bold">Welcome to Kobweb</h1>
        <p className="text-lg mt-2">
          Your professional network for business connections and opportunities
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Button onClick={() => navigate("/login")}>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </main>

      <section className="max-w-4xl mx-auto py-24 text-center border-t border-gray-700">
        <h2 className="text-2xl font-semibold">Digital Business Card Management</h2>
        <p className="mt-4 text-gray-400">
          Transform your physical business cards into powerful digital connections.
          Our advanced card registration system allows you to instantly digitize and
          organize your professional network.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-24 text-center">
        <h2 className="text-2xl font-semibold">Smart Headhunting Platform</h2>
        <p className="mt-4 text-gray-400">
          Experience a revolutionary approach to recruitment through our trusted network.
          Connect directly with potential candidates or employers through our secure private messaging system.
        </p>
      </section>

    </div>
  );
};

export default Home;
