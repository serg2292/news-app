import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { setAuth } from "../../redux/users-auth/users-auth.slice";
import { IModalComponent, IUser } from "../../types/types";
import { auth } from "../../utils/helpers/helpers";

import "../../App.css";
import {
  activeModalContentStyle,
  activeModalStyle,
  errInvisibleMessegeStyle,
  errLoginInputStyle,
  errMessegeStyle,
  errPasswordInputStyle,
  formButtonStyle,
  labelStyle,
  loginInputStyle,
  modalContentStyle,
  modalStyle,
  passwordInputStyle,
} from "./ModalStyles";

const Modal = ({ active, setActive }: IModalComponent) => {
  const users = useAppSelector((state) => state.usersAuth.users);
  const dispatch = useDispatch();

  const [loginField, setLoginField] = useState("");
  const [passField, setPassField] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const forms: IUser = {
      login: loginField.toLowerCase(),
      password: passField.toLowerCase(),
    };

    if (auth(users, forms)) {
      dispatch(setAuth(forms));
      setErr(false);
      setLoginField("");
      setPassField("");
      setActive(false);
    } else {
      setErr(true);
      setLoginField("");
      setPassField("");
    }
  };

  const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginField(e.target.value);
  };

  const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassField(e.target.value);
  };

  return (
    <div
      onClick={() => setActive(false)}
      className={active ? activeModalStyle : modalStyle}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={active ? activeModalContentStyle : modalContentStyle}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="login" className={labelStyle}>
            Логин
          </label>
          <input
            id="login"
            className={err ? errLoginInputStyle : loginInputStyle}
            type="text"
            value={loginField}
            onChange={changeLogin}
            required
          />
          <label htmlFor="password" className={labelStyle}>
            Пароль
          </label>
          <input
            id="password"
            className={err ? errPasswordInputStyle : passwordInputStyle}
            type="password"
            value={passField}
            onChange={changePass}
            required
          />
          <p className={err ? errMessegeStyle : errInvisibleMessegeStyle}>
            Неверные имя пользователя или пароль
          </p>
          <button className={formButtonStyle}>Вход</button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
