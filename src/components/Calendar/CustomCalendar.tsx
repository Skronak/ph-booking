import './calendar-style.css';
import {SetStateAction, useState} from "react";
// @ts-expect-error
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Button, Col, Container, Row} from "react-bootstrap";

export function CustomCalendar() {
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    return (
        <div style={{backgroundColor: "white", padding: "1em 0"}}>
            <Container>
                <Row>
                    <Col>
                        <label htmlFor="departure">Dates</label></Col>
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
                    <Button variant="primary">Reserver votre sejour</Button>
                </Col>
            </Row>
        </Container>
        </div>
    );

}