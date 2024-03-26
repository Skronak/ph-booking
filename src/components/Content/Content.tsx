import {Col, Container, Row} from 'react-bootstrap';
import './content.css';
import {CustomCalendar} from "../Calendar/CustomCalendar.tsx";
import SectionVoyage from "./SectionVoyage/SectionVoyage.tsx";

const Content = () => {
  return (
    <div>
      <Container>
        <CustomCalendar/>
        <button>Reserver votre sejour</button>
          <Row>
              <Col>
            <div className="box">
              <div className="w-100 feature">
                <span className="material-symbols-outlined">bed</span>
                <div>2 chambres</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="box">
              <div className="w-100 feature">
                <span className="material-symbols-outlined">pool</span>
                <div>Piscines</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="box">
              <div className="boxContianer d-flex">
                <div className="w-100 feature">
                  <span className="material-symbols-outlined">shower</span>
                  <div>2 salles de bains</div>
                </div>
                <div className="w-100 feature">
                  <span className="material-symbols-outlined">flatware</span>
                  <div>Cuisines</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

          <h2>Gallery</h2>
          <h2>Google Map</h2>
        <div className="headerFoot my-4">
          <SectionVoyage />
        </div>
      </Container>
    </div>

  )
}

export default Content