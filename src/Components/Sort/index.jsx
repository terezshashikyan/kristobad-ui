import { useState } from 'react';
import {arrowUp, arrowDown} from '../../Assets/Icons';

import './style.scss';

const Sort = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
    return (
     
          <div className='sort'>
            <div className='filters__selectMenu_button' onClick={handleOpen}>Sort {open? <img src= {arrowUp} alt="up" />:<img src= {arrowDown} alt="down" /> }</div>
            {open ? (<ul className='sort__selectMenu'>
            <li className='sort__selectMenu_item'>New Product</li>
            <li className='sort__selectMenu_item'>Price(high to low)</li>
            <li className='sort__selectMenu_item'>Price(low to high)</li>
            <li className='sort__selectMenu_item'>Discount: descending</li>
            </ul>
            ): null}
          </div>
    
    )
};

export default Sort;