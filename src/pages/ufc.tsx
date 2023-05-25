import ufclogo from "./../assets/ufclogo.jpg";
import hollyholm from "./../assets/hollyholm.png";
import mayrabuenosilva from "./../assets/mayrabuenosilva.png";
import { useState } from "react";
import { UfcPodaci, UfcType } from "../ufcPodaci";
const [winerFighter, setWinerFighter]=
useState<UfcType |null>(null)
const getWinerFighter = (id)=>{
  
    }


const Ufc = () => {
  return (
    <div className="ufc">
      <header className="ufc__header">
        <img src={ufclogo} alt="logo" width={200} />
        <div>
          <h1>Ultimate Fighting Championship</h1>
          <div>UFC FIGHT NIGHT</div>
        </div>
        <div></div>
      </header>
      <h3>July 16, 2023</h3>
      <h3>UFC Fight Night: Holm vs. Silva</h3>
      <div 
  {UfcPodaci.map((ufcPodaci) => {
    return <div onClick={() => getWinerFighter(UfcPodaci.id)} className="card"></div>;
  })}
      className="ufc__players ufc--black">
        <div>
          
          <img src={hollyholm} alt="holly" />
          <button>win</button>
          <h3>rank</h3>
        </div>
        <div>
          <img src={mayrabuenosilva} alt="holly" />
          <button>win</button>
          <h3>rank</h3>
        </div>
      </div>
    </div>
  );
};
export default Ufc;
