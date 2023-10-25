import './style.scss';
import PriceFilter from '../PriceFilter';
import ColorFilter from '../ColorFilter';
import { useState } from 'react';
import down from '../../Assets/Icons/arrow_down.png';
import up from '../../Assets/Icons/arrow_up.png';


 function Filters() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
return (
    <div className='filters'>
          <div className='filters__selectMenu_button' onClick={handleOpen}>Filter {open? <img src= {up} alt="up" />:<img src= {down} alt="down" /> }</div>
        {open ? (<div className='filters__selectMenu'>
        <PriceFilter/>
        <ColorFilter/>
        </div>
        ): null}
      </div> 
)
}

export default Filters;