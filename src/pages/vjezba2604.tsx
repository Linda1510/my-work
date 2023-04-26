const Vjezba2604 = () => {
  //Nizovi
  let arr = ["mama", "tata", "baka", "dida"];
  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] == "baka") {
    // break;
    //}
    //console.log(arr[i]);
    //if (arr[i] == "tata") {
    //delete arr[i];
    // }
  }
  //arr.push("Nikolina");
  //console.log("nas array je:", arr);

  //Funkcije
  let baka;
  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
        return baka;
      }
    }
  }

  const printText = (text: string) => {
    return text;
  };
  //Objekti
  //kreiraj objekt (car)
  type CarType = {
    [key: string]: number | string;
  };
  let car: CarType = {
    obujamMotora: 1600,
    carName: "Fiat",
    carColor: "Black",
    dodatnaOprema: "Klima",
    vrata: 4,
    tipMotora: "disel",
    maxBrzina: 200,
    snaga: "50kw",
  };
  const recenica = `ja imam predobar auto koji je ${car.carName} i ide ${car.maxBrzina} `;
  const printValue = (key: string) => {
    return car[key];
  };
  //Zadatak ispistai najveći broj iz niza
  const brojevi = [12, 13, 15, 20, 25, 18, 9, 10];
  const gratestNumber = () => {
    let najveci = brojevi[0];
    for (let i = 1; i < brojevi.length; i++) {
      if (brojevi[i] > najveci) {
        najveci = brojevi[i];
      }
    }
    console.log(najveci);
  };

  return (
    <div className="container">
      <h1>Nizovi</h1>
      <hr />
      <div>{bringBaka()}</div>
      <div>{printText("Neki text")}</div>
      <div>{recenica}</div>
      <div>{printValue("carName")}</div>
    </div>
  );
};
export default Vjezba2604;
