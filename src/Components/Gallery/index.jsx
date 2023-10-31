import {GALLERY_IMAGES} from './constant.jsx';
import './style.scss';

const Gallery = () => {
    const galleryImagesRenderer = GALLERY_IMAGES.map((img) => {
        return (
           <img key = {img.id} src= {img.src} alt = 'gallery item'/>
        )
    });

     (
        <section className="gallery">
            <h1 className="gallery__headname">
            KristoBad & Celebrities
            </h1>
            <div className="gallery__images">
                {galleryImagesRenderer}
            </div>
        </section>
    )
}

export default Gallery;