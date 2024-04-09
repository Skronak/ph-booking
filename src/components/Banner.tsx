import {Container, Nav, Navbar} from 'react-bootstrap';
import './banner.css';
import {useTranslation} from "react-i18next";
import {supportedLngs} from "../i18n/i18n.config.ts";

const Banner = () => {
    const [t,i18n] = useTranslation();

    return (
            <Navbar bg="transparent" expand="lg">
            <Container className={"navbar-container"}>
                <select className="language-Select" aria-label="Default select example"
                        value={i18n.resolvedLanguage}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                    {Object.entries(supportedLngs).map(([code, name]) => (
                        <option value={code} key={code}>
                            {name}
                        </option>
                    ))}
                </select>

                <Navbar.Brand href="#">Vuez Cocoon House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#section-features">{t("menu.house")}</Nav.Link>
                        <Nav.Link href="#section-gallery">{t("menu.gallery")}</Nav.Link>
                        <Nav.Link href="#section-gmap">{t("menu.location")}</Nav.Link>
                        <Nav.Link href="#section-explore">{t("menu.surroundings")}</Nav.Link>
                        <Nav.Link href="#section-contact">{t("menu.contact")}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Banner;