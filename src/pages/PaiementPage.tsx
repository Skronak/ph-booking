import Footer from "../components/Footer/Footer.tsx";
import "./homePage.css"
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import BannerPaiement from "../components/Banner/BannerPaiement.tsx";
import {useState} from "react";
import Header from "../components/Header/Header.tsx";
import {CustomCalendar} from "../components/Calendar/CustomCalendar.tsx";
import ModalCG from "../components/GeneralCondition/ModalCG.tsx";
import {useSearchParams} from "react-router-dom";

const PaiementPage = () => {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [searchParams] = useSearchParams();
    const startDate: string = searchParams.get("start")!;
    const endDate: string = searchParams.get("end")!;

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
            <CustomCalendar start={startDate} end={endDate}/>
            <Container style={{padding:"1em 0px"}}>
                <Row className={"gy-5"} style={{ flexDirection: "row-reverse"}}>
                    <div className={"col-md-3 "}>
                        <h2>Votre reservation</h2>
                        <hr/>
                        <p>Date d'arrivée</p>
                        <p>12/04/2024</p>
                        <p>Date de départ</p>
                        <p>12/04/2024</p>
                        <p>Nombre de nuités: 2</p>
                        <hr/>
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
                    <div className={"col-md-9"} style={{backgroundColor: "#e6e6e2"}}>
                        <h1>Informations de contact</h1>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="form.nom">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control required type="text" placeholder="Nom"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="form.prenom">
                                <Form.Label>Prenom</Form.Label>
                                <Form.Control required type="text" placeholder="prenom"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="form.mail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Control required type="text" placeholder="Phone" />
                            <Form.Check
                                required={true}
                                type={'checkbox'}
                                id={`default-checkbox}`}
                                label={<div>J'accepte les <a href="#" onClick={handleShow}>conditions générales</a></div>}
                            />
                            <hr/>
                            <Button type="submit">Payer</Button>
                        </Form>
                    </div>

                </Row>
                <ModalCG show={show} handleClose={handleClose}/>
            </Container>
            <Footer/>
        </div>
    )
}

export default PaiementPage;