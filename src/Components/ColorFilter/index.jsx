import './style.scss';
import { useState } from 'react';
import down from '../../Assets/Icons/arrow_down.png';
import up from '../../Assets/Icons/arrow_up.png';

function ColorFilter() {

const COLORS = [
    {colorName: 'Brown', 
     colorCode: '#9B720A',},
     {colorName: 'Black', 
     colorCode: '#000',},
     {colorName: 'Burgundy', 
     colorCode: '#5F021F',},
     {colorName: 'Blue', 
     colorCode: '#689ED0',},
     {colorName: 'Beige', 
     colorCode: '#E2D8BF',},
     {colorName: 'Brown', 
     colorCode: '#9B720A',},
     {colorName: 'Black', 
     colorCode: '#000',},
     {colorName: 'Burgundy', 
     colorCode: '#5F021F',},
     {colorName: 'Blue', 
     colorCode: '#689ED0',},
     {colorName: 'Beige', 
     colorCode: '#E2D8BF',},
     {colorName: 'Coral', 
     colorCode: '##F96F51',},
]
const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

    return (
        <div className='colorFilter'>
          <div className='colorFilter__selectMenu_button' onClick={handleOpen}>Color {open? <img src= {up} alt="up" />:<img src= {down} alt="down" /> }</div>
          {open ? (
          <section className='colorFilter__selectMenu'>
                { COLORS.map((color) => {
                return (
                    <div className="colorFilter__selectMenu_item">
                        <div style={{backgroundColor: color.colorCode, width: '24px', height: '24px', borderRadius:'50%',}}></div>
                        <p className="colorFilter__selectMenu_item_colorName">{color.colorName}</p>
                    </div>
                )
                })}
          </section>
        ): null}
      </div> 
    )
}

export default ColorFilter;