import {useState} from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import './date-range-calendar.css';
import {Container} from "react-bootstrap";
import {Value} from "@wojtekmaj/react-daterange-picker/dist/cjs/shared/types";

export default function DateRangeCalendar() {
    const [value, onChange] = useState<Value>([new Date(), new Date()]);

    return (
        <Container style={{height: "3em", marginTop: "-1.5em", display: "flex", justifyContent: "center", backgroundColor:"unset"}}>
            <DateRangePicker onChange={onChange} value={value}/>
        </Container>
    );
}