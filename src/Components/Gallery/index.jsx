import gallery1 from '../../Assets/Images/galleryImg1.png';
import './style.scss';

const GALLERY_IMAGES = [gallery1, gallery1, gallery1, gallery1, gallery1, gallery1,];

function Gallery() {
    return (
        <section className="gallery">
            <h1 className="gallery__headname">
            KristoBad & Celebrities
            </h1>
            <div className="gallery__images">
                {GALLERY_IMAGES.map((img) => {
                    return (
                       <img src= {img} alt = 'gallery item'/>
                    )
                })}
            </div>
        </section>
    )
}

export default Gallery;