import {Col, Row} from 'react-bootstrap';
import './Header.css';
import loc_logo from "@/assets/geo-alt-fill.svg";
import backgroundImg from "@/assets/background2.jpg";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <header>
        <div className={"container-fluid"}>
        <Row style={{ flexDirection: "row-reverse"}}>
            <img src={backgroundImg} alt="headerr-image" className='hero-image' />
            <div className="hero-text">
                <h1 style={{ color: '#FB9431', fontFamily: 'regular'}}>Cocoon Vuez Home</h1>
                <h3 style={{ color: '#3D3F42' }}>Enjoy the best location in El Nido <img src={loc_logo} alt="loc" className='' style={{ width: '25px', height: '25px', objectFit: 'cover' }} /></h3>
            </div>
        </Row>
        </div>
    </header>

  )
}

export default Header