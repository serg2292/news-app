import { NavLink } from "react-router-dom";
import { IHeaderComponent } from "../../types/types";


const Header = ({active, setActive}: IHeaderComponent) => {

  const activeLink = 'bg-green-200 py-1 md:p-2 md:mr-10';
  const notActiveLink = 'hover:bg-green-100 active:bg-green-200 py-1 md:p-2 md:mr-10 transition duration-200';

  return (
    <header className="bg-black text-base font-semibold uppercase font-nav">
      <nav className="flex flex-col text-center mx-auto text-white justify-between md:flex-row md:container">
        <ul className="flex flex-col text-center md:flex-row">
          <NavLink to="/" className={(navData) => (navData.isActive ? activeLink : notActiveLink)}>
            <li className="">
              Главная
            </li>
          </NavLink>
          <NavLink to="news" className={(navData) => (navData.isActive ? activeLink : notActiveLink)}>
            <li className="">
              Новости
            </li>
          </NavLink>
        </ul>
        <ul>
          <li>
            <button onClick={(isModal) => setActive(true)} className={`text-base font-semibold uppercase w-full md:mr-10 ${notActiveLink}`}>Вход</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
