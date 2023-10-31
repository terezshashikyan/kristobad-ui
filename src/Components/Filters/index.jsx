import { useState } from 'react';
import PriceFilter from '../PriceFilter';
import ColorFilter from '../ColorFilter';
import { arrowUp, arrowDown } from '../../Assets/Icons';

import './style.scss';


 const Filters = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
return (
    <div className='filters'>
          <div className='filters__selectMenu_button' onClick={handleOpen}>Filter {open? <img src= {arrowUp} alt="up" />:<img src= {arrowDown} alt="down" /> }</div>
        {open ? (<div className='filters__selectMenu'>
        <PriceFilter/>
        <ColorFilter/>
        </div>
        ): null}
      </div> 
)
}

export default Filters;