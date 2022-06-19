import { IModalComponent } from "../../types/types";

const Modal = ({active, setActive}: IModalComponent) => {
  const modalStyles = "bg-black-op w-screen h-0 fixed z-10 opacity-0";
  const activeModalStyles = "bg-black-op w-screen h-screen fixed z-10 opacity-1 transition-opacity duration-300";

  const modalContentStyles = "bg-white w-80 z-20 top-0 py-9 px-5 absolute left-2/4 -translate-x-2/4";
  const activeModalContentStyles = "bg-white w-80 z-20 py-9 px-5 absolute left-2/4 top-1/4 -translate-x-2/4 transition-top duration-300";


  return (
    <div onClick={() => setActive(false)}
    className={active ? activeModalStyles : modalStyles}

    >
      <div
      onClick={event => event.stopPropagation()}
      className={active ? activeModalContentStyles : modalContentStyles}

      ><form onSubmit={(e) => e.preventDefault()}>
        <label className="font-bold text-lg ml-2.5 inline-block mb-2">Логин</label>
        <input className="border border-grey-100 focus:outline-none w-full px-2.5 py-1.5 mb-6" type="text" />
        <label className="font-bold text-lg ml-2.5 inline-block mb-2">Пароль</label>
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
        </form>
      </div>
    </div>
  );
};
export default Modal;