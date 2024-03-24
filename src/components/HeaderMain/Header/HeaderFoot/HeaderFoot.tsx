import { Button, Col, Row } from 'react-bootstrap';
import './HeaderFoot.css';
import food from '../../../../assets/c.png';

const HeaderFoot = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <div className="h_footer">
            <div className="h_ftCona">
              <img src={food} alt="header-footer" className='img-fluid' />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="h_ftright">
            <div className="containerBox">
              <h1 style={{ color: '#3D3F42', fontWeight: "bold" }}>Enjoy the beautiful Landscape of El Nido.</h1>
              <p className='text-secondary my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quibusdam sed aut sint voluptatem laudantium reiciendis cumque dolores culpa nobis?</p>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quibusdam sed aut sint voluptatem laudantium reiciendis cumque dolores culpa nobis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore voluptatum dolores modi cupiditate quaerat optio quas dicta! Sequi, facere.</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default HeaderFoot