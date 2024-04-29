import {useTranslation} from "react-i18next";

export default function ControlPanel() {
    const [t] = useTranslation();

    return (
        <div className="control-panel">
            <h3>{t("menu.title")}</h3>
            <p>
                1010 Avenue, sw 54321, chandigarh, El Nido
            </p>
            <div className="links">
                <a
                    href="https://codesandbox.io/s/github/visgl/react-google-maps/tree/main/examples/markers-and-infowindows"
                    target="_new">
                    view at google map ↗

                </a>
            </div>
        </div>
    );
}
