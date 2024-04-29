import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";
import "./google-map.css";
import ControlPanel from "./ControlPanel.tsx";
import {useTranslation} from "react-i18next";

export function SectionGoogleMap() {
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();
    const [t] = useTranslation();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    const position = {lat: 11.198179, lng: 119.432092};
    return (
        <Container>
            <h2 className={"section-title"}>{t("section.location.title")}</h2>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={['marker']}>
                <div className="gmap">
                    <Map
                        defaultCenter={position}
                        defaultZoom={15}
                        disableDefaultUI={true}>
                        <Marker position={position} />
                    </Map>
                    <ControlPanel />
                </div>
            </APIProvider>
        </Container>
    )
}
