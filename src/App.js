import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Gallery from './Components/Gallery';
import Sort from './Components/Sort';
import FiltersContent from './Components/FiltersContent';
import Filters from './Components/Filters';
import PriceFilter from './Components/PriceFilter';
import ColorFilter from './Components/ColorFilter';
import './App.scss';

function App() {
  return (
    <div className="productsPage">
      <Header/>

      <div className='productsPage__section1'>
          <FiltersContent/>
      </div>
      
      <div className='productsPage__section2 container'>
          <Filters/>
          <Sort/> 
      </div>
     
      <section className='productsPage__section3and4_container container'>
      <div className='productsPage__section3'>
          <PriceFilter/>
          <ColorFilter/>
      </div>

      <div className = 'productsPage__section4'>
           <Products/>
      </div>
      </section>
      
      <div className = 'productsPage__section5'>
           <Gallery/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
