import './calendar-style.css';
import {SetStateAction, useState} from "react";
// @ts-expect-error
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Button, Col, Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";

export function CustomCalendar() {
  const  [t] = useTranslation();

  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    <div style={{backgroundColor: "white", padding: "1em 0"}}>
      <Container>
        <div className={"row g-3 justify-content-center"}>
          <Col md={3}>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date: SetStateAction<Date>) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </Col>
          <Col md={3}>
            <DatePicker
              showIcon
              selected={endDate}
              onChange={(date: SetStateAction<Date>) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </Col>
          <Col md={3}>
            <Button variant="primary">{t("calendar.book")}</Button>
          </Col>
        </div>
      </Container>
    </div>
  );

}