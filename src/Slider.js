import React, {useState} from 'react';
import "./slider.scss";
import ImgComp from "./ImgComp";
import i1 from "./pictures/i1.jpg";
import i2 from "./pictures/i2.jpg";
import i3 from "./pictures/i3.jpg";
import i4 from "./pictures/i4.jpg";


function Slider(){
    let sliderArr = [
        <ImgComp src={i1} />,
        <ImgComp src={i2} />,
        <ImgComp src={i3} />,
        <ImgComp src={i4} />];
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * 3) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * 3 ? setX(0) : setX(x - 100);
    };


    return(
<div className="carrossel">
<div className="slider">
    
    {
      sliderArr.map((item, index)=>{
         return(
             <div key={index} className="slide" 
                style={{transform: `translateX(${x}%)`}}>
                   {item} 
             </div>)
        })
    }
    
</div>
<div className="slide-row">
    <button id="goLeft" onClick={goLeft}>&lt;</button>
    <div>{1+x/-100}</div>
    <button id="goRight" onClick={goRight}>&gt;</button>
    </div>
</div>
)

}
export default Slider;