import {Container} from "react-bootstrap";
import SwipeGallery from "../../Gallery/SwipeGallery.tsx";
import './gallery.css';
import {useTranslation} from "react-i18next";

export default function SectionGallery() {
    const [t] = useTranslation();

    return (
        <Container>
            <h2 className={"section-title"}>{t("section.gallery.title")} (9)</h2>
            <SwipeGallery
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
                          'https://cdn.photoswipe.com/photoswipe-demo-images/photos/10/img-200.jpg',
                        width: 2500,
                        height: 1666,
                    },
                    {
                        largeURL:
                            'https://media.gettyimages.com/id/906778428/fr/photo/tropical-lagoon-on-the-island-or-coron-in-the-philippines.webp?s=2048x2048&w=gi&k=20&c=vbRsyD4NpTdvZIjYmi9k1Cg17k8YZY9dKNBOSYDejYY=',
                        thumbnailURL:
                            '',
                        width: 2500,
                        height: 1666,
                    },
                    {
                        largeURL:
                            'https://media.gettyimages.com/id/962477350/fr/photo/vue-a%C3%A9rienne-de-lile-aux-serpents-el-nido-palawan-philippines.webp?s=2048x2048&w=gi&k=20&c=HZfitU9PdYDDlDSOwuH_6ctUtezJDNBL9QRfQl0QZ-I=',
                        thumbnailURL:
                            '',
                        width: 2500,
                        height: 1666,
                    },
                    {
                        largeURL:
                            'https://media.gettyimages.com/id/576724290/fr/photo/el-nido-philippines.webp?s=2048x2048&w=gi&k=20&c=yxcLbJj8kuYeXApaUo3AZ51WcklRzQ-1FuV0-oJlWZo=',
                        thumbnailURL:
                            '',
                        width: 2500,
                        height: 1666,
                    },
                    {
                        largeURL:
                            'https://media.gettyimages.com/id/1488194093/fr/photo/philippines-palawan-el-nido-entalula-island-small-paradise-beach.webp?s=2048x2048&w=gi&k=20&c=laXDdf1Rj_YJNIubZdSndtqNIKkLOhLGruz3flycahk=',
                        thumbnailURL:
                            '',
                        width: 2500,
                        height: 1666,
                    },
                    {
                        largeURL:
                            'https://media.gettyimages.com/id/926246364/fr/photo/vue-a%C3%A9rienne-du-magnifique-lagon-avec-kayaks.webp?s=2048x2048&w=gi&k=20&c=jpsT4nBHGJXDSkh693SY4v4garEeBotOvHFXosR3H0Q=',
                        thumbnailURL:
                            '',
                        width: 2500,
                        height: 1666,
                    },
                    {
                        largeURL:
                            'https://media.gettyimages.com/id/904288674/fr/photo/makati-manille-au-cr%C3%A9puscule.webp?s=2048x2048&w=gi&k=20&c=OOkZbYehBEZMq8HjqVsXy3f29-PJ3Eq-V01QC_1Xju0=',
                        thumbnailURL:
                            '',
                        width: 2500,
                        height: 1666,
                    },
                ]}
            />
        </Container>
    );
}