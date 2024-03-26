import {Col, Container, Row} from 'react-bootstrap';
import './Header.css';
import head_rightImg from '../../../assets/headerRght.png';
import HeaderFoot from './HeaderFoot/HeaderFoot.tsx';
import loc_logo from '../../../assets/geo-alt-fill.svg';
import {CustomCalendar} from "../../Calendar/CustomCalendar.tsx";

const Header = () => {
  return (
    <div>
        <Row style={{ flexDirection: "row-reverse"}}>
          <Col md={6}>
            <div className="head_left">
              <div className="imageContainer d-flex justify-content-end align-items-center">
                <img src={head_rightImg} alt="headerr-image" className='head_rightImg' />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="head_right">
              <div className="w-75 mt-2 h_title">
                <h1 style={{ color: '#FB9431', fontFamily: 'regular'}}>Cocoon Vuez Home</h1>
                <h3 style={{ color: '#3D3F42' }}>Enjoy the best location in El Nido <img src={loc_logo} alt="loc" className='' style={{ width: '25px', height: '25px', objectFit: 'cover' }} /></h3>

              </div>
            </div>
          </Col>
        </Row>
    </div>

  )
}

export default Header