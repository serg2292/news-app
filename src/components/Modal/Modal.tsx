import { IModalComponent } from "../../types/types";

const Modal = ({active, setActive}: IModalComponent) => {
  const modalStyles = "bg-black-op w-screen h-screen fixed z-10";

  return (
    <div onClick={() => setActive(false)} className={active ? modalStyles : modalStyles + ' hidden'}>
      <div onClick={event => event.stopPropagation()} className="bg-white w-80 z-20 py-9 px-5 absolute left-2/4 top-1/4 -translate-x-2/4">
        <h2 className="font-bold text-lg mb-2 ml-2.5">Логин</h2>
        <input className="border border-grey-100 focus:outline-none w-full px-2.5 py-1.5 mb-5" type="text" />
        <h2 className="font-bold text-lg mb-2 ml-2.5">Пароль</h2>
        <input className="border border-grey-100 focus:outline-none w-full px-2.5 py-1.5 mb-14" type="password" />
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
      </div>
    </div>
  );
};
export default Modal;