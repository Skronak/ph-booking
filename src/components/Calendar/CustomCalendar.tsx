import './calendar-style.css';

export function CustomCalendar() {
/*
    const [date, setDate] = useState([new Date(), new Date()]);
    const tileDisabled = ({ date }: { date: Date }) => {
        return (
            date.getDay() === 0 ||
            date.getDay() === 6
        );
    };
*/


    return (
        <div className={"custom-calendar"}>
{/*
            <p>{date[1] ? `Votre sejour du ${date[0].toDateString()} au ${date[1].toDateString()}` : `Votre sejour du ${date[0].toDateString()}`}</p>
            <div className='calendar-container'>
                <Calendar
                    onChange={setDate}
                    value={date}
                    selectRange={true}
                    minDate={new Date()}
                    allowPartialRange
                    minDetail={"year"}
                    returnValue={"range"}
                    tileDisabled={tileDisabled}
                />
            </div>
*/}
        </div>
    )

}