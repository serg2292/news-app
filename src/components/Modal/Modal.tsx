import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { setAuth } from "../../redux/users-auth/users-auth.slice";
import { IModalComponent, IUser } from "../../types/types";
import { auth } from "../../utils/helpers/helpers";

const Modal = ({ active, setActive }: IModalComponent) => {

  const users = useAppSelector((state) => state.usersAuth.users);
  const dispatch = useDispatch();

  const [loginField, setLoginField] = useState("");
  const [passField, setPassField] = useState("");
  const [err, setErr] = useState(false);

  const modalStyles = "bg-black-op w-screen h-0 fixed z-10 opacity-0";
  const activeModalStyles = "bg-black-op w-screen h-screen fixed z-10 opacity-1 transition-opacity duration-300";

  const modalContentStyles = "bg-white w-80 z-20 top-0 py-9 px-5 absolute left-2/4 -translate-x-2/4";
  const activeModalContentStyles = "bg-white w-80 z-20 py-9 px-5 absolute left-2/4 top-1/4 -translate-x-2/4 transition-top duration-300";

  const errMessegeStyles = "text-red mb-5 text-xs"

  const loginInputStyles = "border border-grey-100 w-full px-2.5 py-1.5 mb-6"
  const passwordInputStyles = "border border-grey-100 w-full px-2.5 py-1.5 mb-2"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const forms: IUser = {
      login: loginField.toLowerCase(),
      password: passField.toLowerCase(),
    };

    if (auth(users, forms)) {
      dispatch(setAuth(forms))
      setErr(false)
      setLoginField("")
      setPassField("")
      setActive(false)
    } else {
      setErr(true)
      setLoginField("")
      setPassField("")
    }
  }

  const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginField(e.target.value);
  }

  const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassField(e.target.value);
  }

  return (
    <div onClick={() => setActive(false)}
      className={active ? activeModalStyles : modalStyles}

    >
      <div
        onClick={e => e.stopPropagation()}
        className={active ? activeModalContentStyles : modalContentStyles}

      ><form onSubmit={handleSubmit}>
          <label htmlFor="login" className="font-bold text-lg ml-2.5 inline-block mb-2">Логин</label>
          <input id="login" className={err ? loginInputStyles + ' outline outline-2 outline-red' : loginInputStyles} type="text" value={loginField} onChange={changeLogin} required />
          <label htmlFor="password" className="font-bold text-lg ml-2.5 inline-block mb-2">Пароль</label>
          <input id="password" className={err ? passwordInputStyles + ' outline outline-2 outline-red' : passwordInputStyles} type="password" value={passField} onChange={changePass} required />
          <p className={err ? errMessegeStyles : errMessegeStyles + ' invisible'}>Неверные имя пользователя или пароль</p>
          <button
            className="font-semibold
        bg-green-100
        hover:bg-green-200
        active:bg-green-300
        text-white
        w-full
        px-28
        py-3
        transition
        duration-100
        ">Вход</button>
        </form>
      </div>
    </div>
  );
};
export default Modal;