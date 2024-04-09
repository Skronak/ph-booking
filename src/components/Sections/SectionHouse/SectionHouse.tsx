import {Card, Col, Container, Row} from "react-bootstrap";
import './sectionHouse.css';
import {useTranslation} from "react-i18next";

export default function SectionHouse() {
    const [t] = useTranslation();

    return (
        <Container>
            <h2 className={"section-title"}>{t("section.house.title")}</h2>
            <Row className={"g-3"}>
                <Col md={5}>
                    <img style={{width: "100%"}} src={"/hpreview.png"}/>
                </Col>
                <Col>
                    <Row className={"g-3"}>
                        <h2 className={"section-subtitle"}>{t("section.house.accomodation")}</h2>
                        <div className={"col-12"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">width</span>
                                <div>80 m²</div>
                            </Card>
                        </div>
                        <div className={"col-12"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">bed</span>
                                <div>2 {t("section.house.features.bed")}</div>
                            </Card>
                        </div>
                        <div className={"col-12"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">pool</span>
                                <div>{t("section.house.features.pool")}</div>
                            </Card>
                        </div>
                        <Col>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">shower</span>
                                <div>{t("section.house.features.bathroom")}</div>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">flatware</span>
                                <div>{t("section.house.features.kitchen")}</div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className={"g-3"}>
                        <h2 className={"section-subtitle"} style={{paddingTop: "1em"}}>{t("section.house.services")}</h2>
                        <div className={"col-12"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">groups</span>
                                <div>{t("section.house.features.people")}</div>
                            </Card>
                        </div>
                        <div className={"col-6"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">wifi</span>
                                <div>{t("section.house.features.wifi")}</div>
                            </Card>
                        </div>
                        <div className={"col-6"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">bakery_dining</span>
                                <div>{t("section.house.features.breakfast")}</div>
                            </Card>
                        </div>
                        <Col>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">mode_fan</span>
                                <div>{t("section.house.features.air")}</div>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">heat</span>
                                <div>{t("section.house.features.shower")}</div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}