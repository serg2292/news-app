import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { exitAuth } from "../../redux/users-auth/users-auth.slice";
import { IHeaderComponent } from "../../types/types";
import { activeLinkStyle, buttonStyle, headerStyle, navStyle, notactiveLinkStyle, ulButtonStyle, ulStyle } from "./HeaderStyles";


const Header = ({active, setActive}: IHeaderComponent) => {
  const authLogin = useAppSelector((state) => state.usersAuth.authLogin);
  const dispatch = useDispatch();



  const handleClick = () => {
    return authLogin ? dispatch(exitAuth()) : setActive(true)
  }

  return (
    <header className={headerStyle}>
      <nav className={navStyle}>
        <ul className={ulStyle}>
          <NavLink to="/" className={(navData) => (navData.isActive ? activeLinkStyle : notactiveLinkStyle)}>
            <li className="">
              Главная
            </li>
          </NavLink>
          <NavLink to="news" className={(navData) => (navData.isActive ? activeLinkStyle : notactiveLinkStyle)}>
            <li className="">
              Новости
            </li>
          </NavLink>
        </ul>
        <ul className={ulButtonStyle}>
          <li>
            <button onClick={handleClick} className={buttonStyle}>{!authLogin ? 'Вход' : 'Выход' }</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
