import './style.scss';
import ProductItem from '../ProductItem';
import img1 from '../../Assets/Images/1.png';

const PRODUCTS = [
    {
        img: img1,
        size: '20.01.512.0001',
        price: '$88',
    },
    {
        img: img1,
        size: '20.01.512.0001',
        price: '$88',
    }
,
{
    img: img1,
    size: '20.01.512.0001',
    price: '$88',
},
{
    img: img1,
    size: '20.01.512.0001',
    price: '$88',
},
{
    img: img1,
    size: '20.01.512.0001',
    price: '$88',
},
{
    img: img1,
    size: '20.01.512.0001',
    price: '$88',
},
{
    img: img1,
    size: '20.01.512.0001',
    price: '$88',
},
{
    img: img1,
    size: '20.01.512.0001',
    price: '$88',
}
];

function Products() {
    return (
      
        <section className = 'products' >
            {PRODUCTS.map((prod)=> {
                return (
                    <ProductItem product = {prod}/>
                )
            })}
            <button className='products__showMoreButton'>More</button>
        </section>
    )
};

export default Products;