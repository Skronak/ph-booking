import {useState} from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import {Value} from "@wojtekmaj/react-daterange-picker/dist/esm/shared/types";
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import './date-range-calendar.css';

export default function DateRangeCalendar() {
    const [value, onChange] = useState<Value>([new Date(), new Date()]);

    return (
        <div>
            <DateRangePicker onChange={onChange} value={value} />
        </div>
    );
}