import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";

export function GoogleMap() {
    const [t] = useTranslation();

    return (
            <Container>
                <h2 className={"section-title"}>{t("section.location.title")}</h2><span></span>
                <img style={{width: "19em"}} src={"/gmap.PNG"}/>
            </Container>
    )
}
