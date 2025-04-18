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
          비즈니스 기회, 연결을 위한 네트워크
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Button onClick={() => navigate("/login")}>로그인</Button>
          <Button>더 알아보기</Button>
        </div>
      </main>

      <section className="max-w-4xl mx-auto py-24 text-center border-t border-gray-700">
        <h2 className="text-2xl font-semibold">디지털 명함 관리</h2>
        <p className="mt-4 text-gray-400">
          종이 명함은 이제 그만!
          kobweb의 편리한 명함 등록 시스템을 통해 당신의 오프라인 명함을 즉시 디지털화하고, 
          전문 네트워크를 한눈에 정리하세요.
          
          비즈니스 관계를 시각적으로 맵핑하고, 숨어있는 인맥 기회를 발견하며
          한 단계 앞선 인맥 관리를 경험해보세요.
          
          똑똑한 네트워크 분석 기능으로 당신의 비즈니스 연결을 강화하고, 전략적으로 활용할 수 있습니다.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-24 text-center">
        <h2 className="text-2xl font-semibold">스마트 헤드헌팅 플랫폼</h2>
        <p className="mt-4 text-gray-400">
        신뢰 기반의 네트워크로
        채용 방식에 혁신을 더하다!

        검증된 전문가들 간의 메시지 시스템을 통해
        기업과 인재가 직접 연결되고,
        기존 인맥의 힘을 극대화하는 신뢰형 리크루팅 환경을 만듭니다.

        사전 검증된 전문가들끼리 채용 기회를 공유하고,
        성공 가능성과 신뢰도가 높은 채용 결과로 이어집니다.
        </p>
      </section>

    </div>
  );
};

export default Home;
