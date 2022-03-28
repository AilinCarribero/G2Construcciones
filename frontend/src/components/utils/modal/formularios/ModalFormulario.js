import React from "react";

//Components
import { Modal, Row, Col } from "react-bootstrap";
import FormMateriales from "../../../views/material/FormMateriales";

//Css
import "./Modal.css";

const ModalFormulario = ({ formulario, show, setShow, setStock, countMat }) => {
    const handleClose = () => setShow(false);

    return(<>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <b>Complete el formulario</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-content">
                {formulario == 'materiales' && <FormMateriales close={handleClose} setStock={setStock} />}
            </Modal.Body>
        </Modal>
    </>)
}

export default React.memo(ModalFormulario)