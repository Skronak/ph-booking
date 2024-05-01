import './calendar-style.css';
import {useEffect, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Button, Col, Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {getDocs, collection} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig.ts";

type Props = {
  start?: string;
  end?: string;
}

type DateRange = {
  start: Date;
  end: Date;
}

export function CustomCalendar({start, end}: Props) {
  const  [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(start? new Date(start) : new Date());
  const [endDate, setEndDate] = useState(end ? new Date(end) : new Date());
  const [excludedDate, setExcludedDate] = useState<Date[]>();
  const bookingCollection = useMemo(()=>collection(db, "orders"), [db]);//prevent db acces each render

  useEffect(() => {
    loadDataFromDB();
  }, []);

  const getDaysArray = (s: Date,e: Date) => {
    const res = [];
    for (let d= new Date(s); d <= new Date(e);d.setDate(d.getDate()+1)) {
      res.push(new Date(d));
    }
    return res;
  };

  const getExcludedDate = (range: DateRange[])  => {//range = couple (start end)
    const dateToExclude: Date[] = range.map((r: DateRange) => getDaysArray(r.start, r.end)).flat();
    setExcludedDate(dateToExclude);
  }

  const loadDataFromDB = async () => {
    const sessionData = sessionStorage.getItem("bookedDates");
    if (!sessionData) {
      try {
        const data = await getDocs(bookingCollection);
        const filteredData = data.docs.map((doc) => ({
          start: doc.get("dateArrival").toDate(),
          end: doc.get("dateDeparture").toDate()
        }));
        getExcludedDate(filteredData);

        sessionStorage.setItem("bookedDates", JSON.stringify(filteredData));
        console.log('Data retrieved from DB');
      } catch (err) {
        console.log(err);
      }
    } else {
      const dateRangeSession = JSON.parse(sessionData);
      getExcludedDate(dateRangeSession);
    }
  };

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
              minDate={new Date()}
              startDate={startDate}
              endDate={endDate}
              excludeDates={excludedDate}
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
              excludeDates={excludedDate}
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