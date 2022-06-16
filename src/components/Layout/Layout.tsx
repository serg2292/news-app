import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";

const LayoutPage = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="font-content">
      <Modal active={modalActive} setActive={setModalActive} />
      <Header active={modalActive} setActive={setModalActive} />
      <Outlet />
    </div>
  );
};

export default LayoutPage;