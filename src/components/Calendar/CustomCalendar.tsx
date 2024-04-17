import './calendar-style.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Button, Col, Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";

type Props = {
  start?: string;
  end?: string;
}

export function CustomCalendar({start, end}: Props) {
  const  [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(start? new Date(start) : new Date());
  const [endDate, setEndDate] = useState(end ? new Date(end) : new Date());

/*  const getUserLocal = () => {
    const locale = (new Intl.NumberFormat()).resolvedOptions().locale;
    console.log(locale);
    return locale;
  }*/

  const getDateFormat = () => {
    if (i18n.language == 'fr') {
      return "dd/MM/yyyy"
    } else {
      return "MM/dd/yyyy";
    }
  }

  const handleButtonClick = () => {
    navigate({
      pathname: '/paiement',
      search: `?start=${startDate.toISOString()}&end=${endDate.toISOString()}`
    });
  }

  const getNbDayLabel = () => {
    const nbDays = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    if (nbDays==0) {
      return `1 ${t("calendar.day")}`
    } else if (nbDays > 0) {
      return `${nbDays+1} ${t("calendar.day")} / ${nbDays} ${t("calendar.night")}`
    }
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
              excludeDates={[new Date(), new Date('2024-04-18')]}
//              locale={getUserLocal()}
              dateFormat={getDateFormat()}
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
              dateFormat={getDateFormat()}
//              locale={getUserLocal()}
            />
          </Col>
          <Col >
            <div>{getNbDayLabel()}</div>
          </Col>
         <Col md={3}>
           <Button variant="primary" onClick={handleButtonClick}>{t("calendar.book")}</Button>
          </Col>
        </div>
      </Container>
    </div>
  );

}