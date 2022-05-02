import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="news">Новости</Link>
          </li>
        </ul>
        <ul>
          <li>
            <button>Вход</button>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
