import ufclogo from "./../assets/ufclogo.jpg";
import hollyholm from "./../assets/hollyholm.png";
import mayrabuenosilva from "./../assets/mayrabuenosilva.png";
import { FighterType, ufcData, ufcFightsData } from "../ufcPodaci";
import { useState } from "react";




const Ufc = () => {
  const [winnerFighter, setWinnerFighter] = useState<FighterType | null>(null);

  const getWinnerFighter = (id: number) => {};

  const renderFighter = (fighterId: number) => {
    let fighter: FighterType | null = null;

    ufcData.forEach((currentFighter) => {
      if (currentFighter.id === fighterId) {
        fighter = currentFighter;
      }
    });

    if (fighter) {
      const data = fighter as FighterType;
      return (
        <>
          <img
            className="ufc__fighter__img"
            src={data.img}
            alt={data.name + " " + data.lastName}
          />
          <div className="ufc__fighter__name">
            {data.name + " " + data.lastName}
          </div>
          <div className="ufc__fighter__nickname">{data.nickname}</div>
        </>
      );
    } else {
      return "Didn't found fighter with that ID";
    }
  };

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

      <div className="ufc__matches">
        {ufcFightsData.map((fight, index) => {
          return (
            <div className="ufc__fight" key={index}>
              <div className="ufc__fighter">{renderFighter(fight.blue)}</div>
              <div className="ufc__vs">VS</div>
              <div className="ufc__fighter">{renderFighter(fight.red)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Ufc;