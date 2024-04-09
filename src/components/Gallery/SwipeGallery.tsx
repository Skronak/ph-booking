import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import './swipeGallery.css';

type Props = {
    images: {
        largeURL: string,
        width: number,
        height: number,
        thumbnailURL: string
    }[],
}
export default function SwipeGallery(props: Props) {
    useEffect(() => {
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: '#section-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
            showHideAnimationType: 'zoom',
            clickToCloseNonZoomable: true,
            preloadFirstSlide: true
        });
        lightbox.init();

        return () => {
            lightbox && lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <div className={"thumbmail-container"}>
            {props.images.map((image, index) => (
                <a
                    href={image.largeURL}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={'picture-' + index}
                    target="_blank"
                    rel="noreferrer"
                >
                    {image.thumbnailURL && (
                      <img src={image.thumbnailURL} alt="picture" className={`thumbmail-${index}`}/>)
                    }
                </a>
            ))}
        </div>
    );
}
