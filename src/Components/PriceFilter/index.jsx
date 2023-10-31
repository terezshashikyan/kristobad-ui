import { useState } from 'react';
import {arrowDown, arrowUp} from '../../Assets/Icons';

import './style.scss';

const PriceFilter = () => {

const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

    return (
        <div className='priceFilter'>
          <div className='priceFilter__selectMenu_button' onClick={handleOpen}>Price {open? <img src= {arrowUp} alt="up" />:<img src= {arrowDown} alt="down" /> }</div>
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