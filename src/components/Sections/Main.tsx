import './main.css';
import SectionVoyage from "./SectionVoyage/SectionVoyage.tsx";
import {CustomCalendar} from "../Calendar/CustomCalendar.tsx";
import {GoogleMap} from "../GoogleMap/GoogleMap.tsx";
import SectionHouse from "./SectionHouse/SectionHouse.tsx";
import SectionGallery from "./SectionGallery/SectionGallery.tsx";

const Main = () => {
    return (
        <>
            <CustomCalendar/>
            <div className={"section-uneven"} id="section-features">
                <SectionHouse/>
            </div>
            <div id="section-gallery" className={"section-even"}>
                <SectionGallery/>
            </div>
            <div id="section-gmap" className={"section-uneven"}>
                <GoogleMap/>
            </div>
            <div id="section-explore" className={"section-even"}>
                <SectionVoyage/>
            </div>
        </>

    )
}

export default Main