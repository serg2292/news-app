import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import { layoutStyle } from "./LayoutStyles";

const LayoutPage = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={layoutStyle}>
      <Modal active={modalActive} setActive={setModalActive} />
      <Header active={modalActive} setActive={setModalActive} />
      <Outlet />
    </div>
  );
};

export default LayoutPage;
