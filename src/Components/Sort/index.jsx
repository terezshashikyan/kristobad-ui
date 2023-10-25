import './style.scss';
import { useState } from 'react';
import down from '../../Assets/Icons/arrow_down.png';
import up from '../../Assets/Icons/arrow_up.png';


function Sort() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
    return (
     
          <div className='sort'>
            <div className='filters__selectMenu_button' onClick={handleOpen}>Sort {open? <img src= {up} alt="up" />:<img src= {down} alt="down" /> }</div>
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