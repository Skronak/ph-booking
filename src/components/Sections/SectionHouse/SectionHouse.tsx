import {Card, Col, Container, Row} from "react-bootstrap";
import './sectionHouse.css';

export default function SectionHouse() {
    return (
        <Container>
            <h2 className={"section-title"}>The House</h2>
            <Row className={"g-3"}>
                <Col md={5}>
                    <img style={{width: "100%"}} src={"/hpreview.png"}/>
                </Col>
                <Col>
                    <Row className={"g-3"}>
                        <h2 className={"section-subtitle"}>Accomodations</h2>
                        <div className={"col-12"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">width</span>
                                <div>80 m²</div>
                            </Card>
                        </div>
                        <div className={"col-12"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">bed</span>
                                <div>2 bedrooms</div>
                            </Card>
                        </div>
                        <div className={"col-12"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">pool</span>
                                <div>Pool</div>
                            </Card>
                        </div>
                        <Col>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">shower</span>
                                <div>Bathroom</div>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">flatware</span>
                                <div>Fitted Kitchen</div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className={"g-3"}>
                        <h2 className={"section-subtitle"} style={{paddingTop: "1em"}}>Additionnal service</h2>
                        <div className={"col-12"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">groups</span>
                                <div>4 people</div>
                            </Card>
                        </div>
                        <div className={"col-6"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">wifi</span>
                                <div>Wifi</div>
                            </Card>
                        </div>
                        <div className={"col-6"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">bakery_dining</span>
                                <div>Breakfast included</div>
                            </Card>
                        </div>
                        <Col>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">mode_fan</span>
                                <div>air conditioner</div>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">heat</span>
                                <div>hot shower</div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}