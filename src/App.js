import React from 'react';
import './App.css';
import Slider from "./Slider";
import ImgComp from "./ImgComp";
import logo from "./pictures/marca_branca.png";

function App() {
  return (
    <div className="App">
      <header className="App-header"><div className="App-img"><ImgComp src={logo}/></div></header>
      <div className="App-srow">

          <div className="App-scol" >
            <div className="App-carr"><Slider /></div>
            <div className="App-blue3">3</div>
            <div className="App-none"> </div>
          </div>

          <div className="App-scol2" >
            <div className="App-srow1">
               <div className="App-yellow">4</div>
               <div className="App-yellow">5</div>
            </div>

            <div className="App-lblue">6</div>

            <div className="App-srow2">
               <div className="App-blue">7</div>
               <div className="App-blue">8</div>
               <div className="App-blue2">9</div>
            </div>

          </div>
          
      </div> 
      <div className="App-bottom">
        <div>
             Av. Sete de Setembro, 317, Sala 506, Icaraí, Niterói - RJ
        </div>
      </div>
  </div>
  );
}

export default App;
