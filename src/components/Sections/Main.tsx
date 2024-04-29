import './main.css';
import {CustomCalendar} from "../Calendar/CustomCalendar.tsx";
import {SectionGoogleMap} from "./GoogleMap/SectionGoogleMap.tsx";
import SectionHouse from "./SectionHouse/SectionHouse.tsx";
import SectionServices from "./SectionServices/SectionServices.tsx";

const Main = () => {
    return (
        <>
            <CustomCalendar/>
            <div id="section-features" className={"section-uneven"}>
                <SectionHouse/>
            </div>
            <div id="section-services" className={"section-even"}>
                <SectionServices/>
            </div>

            <div id="section-gmap" className={"section-uneven"}>
                <SectionGoogleMap/>
            </div>

            {/*
            <div id="section-explore" className={"section-uneven"}>
                <SectionVoyage/>
            </div>
*/}
        </>

    )
}

export default Main