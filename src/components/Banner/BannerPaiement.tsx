import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './banner.css';
import {useTranslation} from "react-i18next";
import {supportedLngs} from "../../i18n/i18n.config.ts";

const BannerPaiement = () => {
    const [t, i18n] = useTranslation();

    return (
        <Navbar bg="transparent" expand="lg">
            <Container className={"navbar-container"}>
                <NavDropdown
                    title={<img className={"language-option"} src={`/${i18n.language}.png`}/>}
                    className={"language-dropdown"}
                    onSelect={(e) => i18n.changeLanguage(e!)}
                >
                    {Object.entries(supportedLngs).map(([code, name]) => (
                        <NavDropdown.Item eventKey={code} key={code}>
                            <span>{name} </span><img className={"language-option"} src={`/${code}.png`}/>
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
                <Navbar.Brand href="/">Vuez Cocoon House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default BannerPaiement;