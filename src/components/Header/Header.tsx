import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { exitAuth } from "../../redux/users-auth/users-auth.slice";
import { IHeaderComponent } from "../../types/types";


const Header = ({active, setActive}: IHeaderComponent) => {
  const authLogin = useAppSelector((state) => state.usersAuth.authLogin);
  const dispatch = useDispatch();

  const activeLink = 'bg-green-200 py-1 md:p-2 md:mr-10';
  const notActiveLink = 'hover:bg-green-100 active:bg-green-200 py-1 md:p-2 md:mr-10 transition duration-200';

  const handleClick = () => {
    return authLogin ? dispatch(exitAuth()) : setActive(true)
  }

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
        <ul className="flex flex-col text-center md:flex-row">
          <li>
            <button onClick={handleClick} className={`text-base font-semibold uppercase w-full md:mr-10 ${notActiveLink}`}>{!authLogin ? 'Вход' : 'Выход' }</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
