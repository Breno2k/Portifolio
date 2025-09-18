import { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Projects.module.css";


const CardsCertificates = ({ img }) => {

    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            {/* Card */}
            <div
                className={`${styles.card_projects} ${styles.cert} card`}
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
            >
                <img className={styles.img_cert} src={img} alt="imagem do projeto" />
            </div>

            {/* Modal do React Bootstrap */}
            <Modal show={show} onHide={handleClose} centered size="lg" >
                <Modal.Body >
                    <img
                        src={img}
                        alt="visualização"
                        className={styles.img_modal}
                        style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "10px" }}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CardsCertificates;
