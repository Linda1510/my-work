import { useEffect } from "react";

const Vjezba0305 = () => {
  //zadatak 1  dohvatimo box i promjenimo mu background-color (kroz JS)
  const box1 = document.getElementsByClassName("box")[0] as HTMLDivElement;
  box1.style.backgroundColor = "blue";

  //zadatak 2 dodamo dodatnu klasu na box koja će povecati njegove dimenzije
  const box2 = document.getElementsByClassName("box")[0] as HTMLDivElement;
  box2.className = "boxadd";

  //zadatak3
  let position = 0;
  let reverse = false;
  const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
  useEffect(() => {
    const frame = () => {
      if (reverse) {
        position--;
      } else {
        position++;
      }
      const currentPosition = position + "px";
      if (position == 30) {
        reverse = true;
      }
      if (position == 0) {
        reverse = false;
      }
      box.style.marginLeft = currentPosition;
    };
    setInterval(frame, 30);
  }, []);

  return (
    <div className="container">
      Vjezba 0305
      <hr />
      <div className="box"></div>
    </div>
  );
};
export default Vjezba0305;
