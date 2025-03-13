const Header = () => {
    return (
      <header className="flex justify-between p-4 text-white">
        <h1 className="text-2xl font-bold">kobweb</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>명함 관리</li>
            <span>|</span>
            <li>헤드 헌팅</li>
            <span>|</span>
            <li>마이페이지</li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;