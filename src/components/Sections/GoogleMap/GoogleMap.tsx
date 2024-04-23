import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import React, {useEffect} from "react";
import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";
import "./google-map.css";
import ControlPanel from "./ControlPanel.tsx";

export function GoogleMap() {
    const [t] = useTranslation();
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    const position = {lat: 11.198179, lng: 119.432092};
    return (
        <Container>
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
