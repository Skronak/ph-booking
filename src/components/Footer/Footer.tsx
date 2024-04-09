import './Footer.css';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const [t] = useTranslation();

    return (
        <div id={"section-contact"}>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"/>
                                    <div className="cta-text">
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"/>
                                    <div className="cta-text">
                                        <a href="tel:0123456789">01.23.45.67.89</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"/>
                                    <div className="cta-text">
                                        <a href="mailto:thibault-vuez.location@gmail.com">thibault-vuez.location@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-1 pb-5">
                        <div className="row">
                            <div className={"col-6 text-center"}>
                                <a href="#"><i className="fa-brands fa-square-facebook fa-2xl"></i></a>
                            </div>
                            <div className={"col-6 text-center"}>
                                <a href="#"><i className="fa-brands fa-2xl fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright © 2023, {t("footer")} <a href="#">Vuez Cocoon</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer