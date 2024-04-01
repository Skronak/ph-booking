import {Col, Container, Row} from 'react-bootstrap';
import './main.css';
import SectionVoyage from "./SectionVoyage/SectionVoyage.tsx";
import DateRangeCalendar from "../Calendar/DateRangeCalendar.tsx";
import SwipeGallery from "../Gallery/SwipeGallery.tsx";

const Main = () => {
    return (
        <>
            <DateRangeCalendar/>
            <Container>
                {/*        <CustomCalendar/>*/}
                <button>Reserver votre sejour</button>
                <Row>
                    <Col>
                        <div className="box">
                            <div className="w-100 feature">
                                <span className="material-symbols-outlined">bed</span>
                                <div>2 chambres</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="box">
                            <div className="w-100 feature">
                                <span className="material-symbols-outlined">pool</span>
                                <div>Piscines</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="box">
                            <div className="boxContianer d-flex">
                                <div className="w-100 feature">
                                    <span className="material-symbols-outlined">shower</span>
                                    <div>2 salles de bains</div>
                                </div>
                                <div className="w-100 feature">
                                    <span className="material-symbols-outlined">flatware</span>
                                    <div>Cuisines</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <h2>Gallery (9 pictures)</h2>
                <SwipeGallery
                    galleryID="vuez-home-gallery"
                    images={[
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
                            width: 1875,
                            height: 2500,
                        },
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
                            width: 1669,
                            height: 2500,
                        },
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                            width: 2500,
                            height: 1666,
                        },
                        {
                            largeURL:
                                'https://media.gettyimages.com/id/906778428/fr/photo/tropical-lagoon-on-the-island-or-coron-in-the-philippines.webp?s=2048x2048&w=gi&k=20&c=vbRsyD4NpTdvZIjYmi9k1Cg17k8YZY9dKNBOSYDejYY=',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                            width: 2500,
                            height: 1666,
                        },
                        {
                            largeURL:
                                'https://media.gettyimages.com/id/962477350/fr/photo/vue-a%C3%A9rienne-de-lile-aux-serpents-el-nido-palawan-philippines.webp?s=2048x2048&w=gi&k=20&c=HZfitU9PdYDDlDSOwuH_6ctUtezJDNBL9QRfQl0QZ-I=',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                            width: 2500,
                            height: 1666,
                        },
                        {
                            largeURL:
                                'https://media.gettyimages.com/id/576724290/fr/photo/el-nido-philippines.webp?s=2048x2048&w=gi&k=20&c=yxcLbJj8kuYeXApaUo3AZ51WcklRzQ-1FuV0-oJlWZo=',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                            width: 2500,
                            height: 1666,
                        },
                        {
                            largeURL:
                                'https://media.gettyimages.com/id/1488194093/fr/photo/philippines-palawan-el-nido-entalula-island-small-paradise-beach.webp?s=2048x2048&w=gi&k=20&c=laXDdf1Rj_YJNIubZdSndtqNIKkLOhLGruz3flycahk=',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                            width: 2500,
                            height: 1666,
                        },
                        {
                            largeURL:
                                'https://media.gettyimages.com/id/926246364/fr/photo/vue-a%C3%A9rienne-du-magnifique-lagon-avec-kayaks.webp?s=2048x2048&w=gi&k=20&c=jpsT4nBHGJXDSkh693SY4v4garEeBotOvHFXosR3H0Q=',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                            width: 2500,
                            height: 1666,
                        },
                        {
                            largeURL:
                                'https://media.gettyimages.com/id/904288674/fr/photo/makati-manille-au-cr%C3%A9puscule.webp?s=2048x2048&w=gi&k=20&c=OOkZbYehBEZMq8HjqVsXy3f29-PJ3Eq-V01QC_1Xju0=',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                            width: 2500,
                            height: 1666,
                        },
                    ]}
                />
                <h2>Google Map</h2>
                <div className="headerFoot my-4">
                    <SectionVoyage/>
                </div>
            </Container>
        </>

    )
}

export default Main