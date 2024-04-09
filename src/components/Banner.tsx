import {Container, Nav, Navbar} from 'react-bootstrap';
import './banner.css';

const Banner = () => {
    return (
        <Navbar bg="transparent" expand="lg">
            <Container className={"navbar-container"}>
                <Navbar.Brand href="#">Vuez Cocoon House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#section-features">The House</Nav.Link>
                        <Nav.Link href="#section-gallery">Gallery</Nav.Link>
                        <Nav.Link href="#section-gmap">Location</Nav.Link>
                        <Nav.Link href="#section-explore">Surroundings</Nav.Link>
                        <Nav.Link href="#section-contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Banner;