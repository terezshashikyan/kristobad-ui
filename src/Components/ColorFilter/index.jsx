import { useState } from 'react';
import {arrowUp, arrowDown} from '../../Assets/Icons';
import {COLORS} from './constant.jsx';

import './style.scss';

const ColorFilter = () => {

const [open, setOpen] = useState(true);

const colorsRenderer = COLORS.map((color) => {
  return (
      <div key = {color.colorCode} className="colorFilter__selectMenu_item">
          <div style={{backgroundColor: color.colorCode, width: '24px', height: '24px', borderRadius:'50%',}}></div>
          <p className="colorFilter__selectMenu_item_colorName">{color.colorName}</p>
      </div>
  )
  })

  const handleOpen = () => {
    setOpen(!open);
  };

    return (
        <div className='colorFilter'>
          <div className='colorFilter__selectMenu_button' onClick={handleOpen}>Color {open? <img src= {arrowUp} alt="up" />:<img src= {arrowDown} alt="down" /> }</div>
          {open ? (
          <section className='colorFilter__selectMenu'>
                {colorsRenderer}
          </section>
        ): null}
      </div> 
    )
}

export default ColorFilter;