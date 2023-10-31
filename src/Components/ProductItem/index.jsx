import {heartIcon} from '../../Assets/Icons';

import './style.scss';

const ProductItem = ({product}) => {
    return (
        <div key = {product.id} className="productItem">
                <div className="prodoctItem__img" style={{backgroundImage: `url(${product.img})`, width: '296px', height: '222px' }}>  
                </div>
                <div className="productItem__size">
                    {product.size}
                </div>
                <div className="productItem__price">
                    <p className="productItem__price_pricetag">{product.price}</p>
                    <img src= {heartIcon} alt="heart icon" />
                </div>
        </div>
    )
}

export default ProductItem;