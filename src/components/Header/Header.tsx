import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-base font-semibold uppercase py-4">
      <nav className="flex flex-col text-center container mx-auto text-white justify-between md:flex-row">
        <ul className="flex flex-col text-center md:flex-row">
          <li className="md:mr-10">
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="news">Новости</Link>
          </li>
        </ul>
        <ul>
          <li>
            <button className="text-base font-semibold uppercase">Вход</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
