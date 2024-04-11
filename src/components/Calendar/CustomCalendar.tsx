import './calendar-style.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Button, Col, Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";

export function CustomCalendar() {
  const  [t] = useTranslation();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleButtonClick = () => {
    navigate('/paiement');
  }

  return (
    <div style={{backgroundColor: "white", padding: "1em 0"}}>
      <Container>
        <div className={"row g-3 justify-content-center"}>
          <Col md={3}>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date!)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </Col>
          <Col md={3}>
            <DatePicker
              showIcon
              selected={endDate}
              onChange={(date) => setEndDate(date!)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </Col>
          <Col >
            <div>{Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))} nuits</div>
          </Col>
         <Col md={3}>
            <Button variant="primary" onClick={handleButtonClick}>{t("calendar.book")}</Button>
          </Col>
        </div>
      </Container>
    </div>
  );

}