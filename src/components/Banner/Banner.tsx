import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './banner.css';
import {useTranslation} from "react-i18next";
import {supportedLngs} from "../../i18n/i18n.config.ts";

const Banner = () => {
    const [t, i18n] = useTranslation();

    return (
        <Navbar bg="transparent" expand="lg">
            <Container className={"navbar-container"}>
                <NavDropdown
                    title={<img className={"language-option"} src={`/${i18n.language}.png`}/>}
                    className={"language-dropdown pe-2"}
                    onSelect={(e) => i18n.changeLanguage(e!)}
                >
                    {Object.entries(supportedLngs).map(([code, name]) => (
                        <NavDropdown.Item eventKey={code} key={code}>
                            <span>{name} </span><img className={"language-option"} src={`/${code}.png`}/>
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
                <Navbar.Brand className={"d-md-none"} href="/">{t("menu.title")}<img className={"main-logo"} src={`/ananas.png`}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#section-features">{t("menu.house")}</Nav.Link>
                        <Nav.Link href="#section-gallery">{t("menu.gallery")}</Nav.Link>
                        <Nav.Link href="#section-gmap">{t("menu.location")}</Nav.Link>
                        <Nav.Link href="#section-services">{t("menu.service")}</Nav.Link>
                        <Nav.Link href="#section-contact">{t("menu.contact")}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Banner;