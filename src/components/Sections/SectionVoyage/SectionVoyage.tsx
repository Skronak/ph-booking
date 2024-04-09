import {Col, Container, Row} from 'react-bootstrap';
import './sectionVoyage.css';
import food from "/c.png";

const SectionVoyage = () => {
    return (
        <Container>
            <h2 className={"section-title"}>Explore the surroundings</h2>
            <Row>
                <div className="containerBox">
                    <p className='text-secondary my-4'>Located at the mouth of the valley and the beach of El
                        Capuo, the landscapes will enchant you and offer you numerous activities such as
                        snorkelling or hiking. Do not hesitate to consult our guides to find out more</p>
                </div>
                <Col md={6}>
                    {<img src={food} alt="header-footer" className='img-fluid'/>}
                </Col>
                <Col md={6}>
                    <div className="h_ftright">
                        <div className="containerBox">
                            <p className='text-secondary my-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Praesent odio dolor, pellentesque non tristique et, porta volutpat tortor. Sed at
                                accumsan ante. Sed dignissim eros vitae scelerisque tristique. Nulla tristique rhoncus
                                diam, et sodales metus vehicula porta. Sed venenatis sapien et metus fringilla dignissim
                                sodales nec ipsum. Aenean magna diam, bibendum et ex nec, dapibus rhoncus tellus. Etiam
                                mattis dolor enim, sed consequat ante pharetra non. Praesent semper erat laoreet
                                vestibulum auctor. Vivamus sed sapien sed massa placerat euismod in in odio. Sed gravida
                                est ac justo tristique interdum. Aliquam imperdiet faucibus neque id sodales. Curabitur
                                sodales neque ac orci convallis laoreet. Nunc vulputate hendrerit elit sit amet
                                malesuada. Aenean sed sollicitudin ante. Praesent congue mattis fringilla. Vivamus
                                aliquam tortor in felis dictum pretium.
                                </p>
                            <p  className='text-secondary my-4'>
                                Ut ac quam ac sapien ornare congue ac in libero. Vestibulum rutrum dolor eget augue
                                elementum, in suscipit lacus lobortis. Nullam arcu leo, rutrum a egestas nec, ornare at
                                ligula. Phasellus ac accumsan enim. Sed fringilla, elit id ullamcorper ullamcorper,
                                sapien ante dictum lacus, elementum viverra urna arcu non sem. Vestibulum sit amet ipsum
                                justo. Maecenas vel eleifend justo. Donec rutrum est id convallis luctus. Mauris neque
                                tellus, porta vel augue eu, ornare consectetur orci. Phasellus sed condimentum nisi, ut
                                sagittis ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SectionVoyage