import React from "react";
import Modal from "./Modal";

const ModalConfirm = ({ isOpen }: { isOpen: boolean }) => {
	return <>{isOpen && <Modal type="confirm"></Modal>}</>;
};

export default ModalConfirm;
