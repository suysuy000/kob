import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="flex justify-between p-4 text-white">
        <h1 className="text-4xl font-bold">kobweb</h1>
        <nav>
          <ul className="flex space-x-4">
            <Link className="mx-2" to="/bs">명함 관리</Link>
            <span></span>
            <Link className="mx-2" to="/rs">헤드 헌팅</Link>
            <span></span>
            <Link className="mx-2" to="/set">마이페이지</Link> 
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;