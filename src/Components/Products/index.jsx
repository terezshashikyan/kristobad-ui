import { PRODUCTS } from './constant';
import ProductItem from '../ProductItem';

import './style.scss';


const Products = () => {
    const productsRenderer = PRODUCTS.map((prod)=> {
        return (
            <ProductItem product = {prod}/>
        )
    })
    return (
      
        <section className = 'products' >
            {productsRenderer}
            <button className='products__showMoreButton'>More</button>
        </section>
    )
};

export default Products;