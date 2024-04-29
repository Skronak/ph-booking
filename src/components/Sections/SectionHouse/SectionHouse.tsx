import {Card, Col, Container, Row} from "react-bootstrap";
import './sectionHouse.css';
import {useTranslation} from "react-i18next";
import SectionGallery from "../SectionGallery/SectionGallery.tsx";

export default function SectionHouse() {
    const [t] = useTranslation();

    return (
        <Container>
            <h2 className={"section-title"}>{t("section.house.title")}</h2>
            <Row className={"g-3"}>
                <Col md={5}>
                    <img className={"preview"} src={"/hpreview.png"}/>
                </Col>
                <Col>
                    <Row className={"g-3"}>
                        <div className={"col-6"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">groups</span>
                                <div>{t("section.house.features.people")}</div>
                            </Card>
                        </div>
                        <div className={"col-6"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">width</span>
                                <div>{t("section.house.features.size")}</div>
                            </Card>
                        </div>
                        <div className={"col-12"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span><span className="material-symbols-outlined">bed</span>+<span
                                    className="material-symbols-outlined">bed</span></span>
                                <div>{t("section.house.features.bed")}</div>
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
                                <span className="material-symbols-outlined">flatware</span>
                                <div>{t("section.house.features.kitchen")}</div>
                            </Card>
                        </Col>
                        <div className={"col-6"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">wifi</span>
                                <div>{t("section.house.features.wifi")}</div>
                            </Card>
                        </div>
                        <div className={"col-6"}>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">shower</span>
                                <div>{t("section.house.features.shower")}</div>
                            </Card>
                        </div>
                        <Col>
                            <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                                <span className="material-symbols-outlined">mode_fan</span>
                                <div>{t("section.house.features.air")}</div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className={"pt-3"}/>
            <h2 className={"section-subtitle"}>Plus de photos</h2>
            <div id="section-gallery">
                <SectionGallery/>
            </div>
        </Container>
    );
}