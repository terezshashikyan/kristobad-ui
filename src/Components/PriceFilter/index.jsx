import './style.scss';
import { useState } from 'react';
import down from '../../Assets/Icons/arrow_down.png';
import up from '../../Assets/Icons/arrow_up.png';

function PriceFilter() {

const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

    return (
        <div className='priceFilter'>
          <div className='priceFilter__selectMenu_button' onClick={handleOpen}>Price {open? <img src= {up} alt="up" />:<img src= {down} alt="down" /> }</div>
        {open ? (<div className='priceFilter__selectMenu'>
        <div className='priceFilter__selectMenu_item'>up to US $50</div>
        <div className='priceFilter__selectMenu_item'>up to US $100</div>
        <div className='priceFilter__selectMenu_item'>up to US $1000</div>
        </div>
        ): null}
      </div> 
    )
}

export default PriceFilter;