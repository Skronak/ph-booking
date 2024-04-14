import Footer from "../components/Footer/Footer.tsx";
import "./homePage.css"
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import BannerPaiement from "../components/Banner/BannerPaiement.tsx";
import {useState} from "react";
import Header from "../components/Header/Header.tsx";
import {CustomCalendar} from "../components/Calendar/CustomCalendar.tsx";
import ModalCG from "../components/GeneralCondition/ModalCG.tsx";
import {useLocation} from "react-router-dom";

const PaiementPage = () => {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {state} = useLocation();
    const {start, end } = state;
    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className={"home home-container"}>
            <BannerPaiement/>
            <Header/>
            <CustomCalendar start={start} end={end}/>
            <Container style={{padding:"1em 0px"}}>
                <Row mb-12>
                    <div className={"col-md-9"}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Control required type="text" placeholder="Nom" />
                            <Form.Control required type="text" placeholder="Prenom" />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Control required type="text" placeholder="Phone" />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    </div>
                    <div className={"col-md-3"}>
                        <h2>Votre reservation</h2>
                        <hr/>
                        <p>Date d'arrivée</p>
                        <p>12/04/2024</p>
                        <p>Date de départ</p>
                        <p>12/04/2024</p>
                        <p>Nombre de nuités</p>
                        <p>2</p>
                        <Row>
                            <Col>Montant Total</Col>
                            <Col>100eur</Col>
                        </Row>
                        <Row>
                            <Col>Montant Taxes</Col>
                            <Col>100eur</Col>
                        </Row>
                        <Row>
                            <Col>Montant TTC</Col>
                            <Col>100eur</Col>
                        </Row>
                        <Row>
                            <Col>Montant Acompte</Col>
                            <Col>100eur</Col>
                        </Row>
                    </div>
                </Row>
            </Container>
            <ModalCG show={show} handleClose={handleClose}/>
            <input type={"checkbox"}/>J'accepte les <a href="#" onClick={handleShow}>conditions générales</a>
            <Footer/>
        </div>
    )
}

export default PaiementPage;