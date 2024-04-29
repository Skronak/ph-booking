import {Card, Container, Row} from 'react-bootstrap';
import './sectionServices.css';
import {useTranslation} from "react-i18next";

const SectionServices = () => {
    const [t] = useTranslation();

    return (
        <Container>
            <h2 className={"section-title"}>{t("section.services.title")}</h2>
            <Row className={"g-3"}>
                <div className={"col-12"}>
                    <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                        <span className="material-symbols-outlined">groups</span>
                        <div>{t("section.services.water")}</div>
                    </Card>
                </div>
                <div className={"col-12"}>
                    <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                        <span className="material-symbols-outlined">width</span>
                        <div>{t("section.services.massage")}</div>
                    </Card>
                </div>
                <div className={"col-12"}>
                    <Card style={{margin: "0 1em", textAlign: "center", padding: "0.5em 0"}}>
                        <span className="material-symbols-outlined">width</span>
                        <div>{t("section.services.car")}</div>
                    </Card>
                </div>
            </Row>
        </Container>
    )
}

export default SectionServices