import { useState } from "react";
type UserType = {
  name: string;
  lastName: string;
  age: number;
  height: number;
  guitars: {
    prva: string;
    druga: string;
  };
};
const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const pi: number = 3.14;
  const number: number = 4;
  let color: string = "red";
  //dostupne marke automobila
  let car: "bmw" | "audi" | "ferarri" = "bmw";

  const obj = {
    name: "Nikolina",
    lastName: "Linda",
    age: 30,
    height: "164",
    guitars: {
      prva: "Fender",
      druga: "Seagul",
      treca: "Schecter",
    },
  };
  color = "green";
  color = "asd";
  //obje vrijednosti moraju biti true kako bi program ušao u statment
  if (pi & number) {
    console.log(pi);
  }

  const addOnOurValue = (ourValue: number, secondNumber: number) => {
    return number + ourValue + secondNumber;
  };
  //samo jedna od varijabli mora biti true
  if (pi | number) {
  }
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;
    console.log(input.value);
    setValue(Number(input.value));
  };

  const fruitName: string = "jabuka";
  const valueCalory: number = 52.1;
  const fruitColor: string = "red";
  const edableFruit: boolean = true;

  return (
    <div className="container">
      <h1>Varijabla vježba</h1>
      <div>
        <h4>Vrijednost pi varijable je:{pi + 5}</h4>
        <h4>Vrijednost color varijable je:{color + "red"}</h4>
        <h4>Vrijednost varijable je:{car}</h4>
      </div>
      <div>
        <h4>Vrijednost našeg statea je :{value}</h4>
        <input className="input" type="number" />

        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <div>
        <>Rezultat naše funkcije je:{addOnOurValue(9, 5)}</>
      </div>
      <div>
        <h4>
          Vrijednosti našeg objekta su:{obj.name} {obj.lastName}
        </h4>
        <div>godine :{obj.age}</div>
        <div>Visina :{obj.height}</div>
        <div>
          Guitars :{obj.guitars.prva} {obj.guitars.druga} {obj.guitars.treca}
        </div>
        <div>
          <table className="fruit">
            <tr>
              <th>Voće</th>
              <th>Kalorijska Vrijednost</th>
              <th>Boja</th>
              <th>Jestivost</th>
            </tr>
            <tr>
              <td>{fruitName}</td>
              <td>{valueCalory}</td>
              <td>{fruitColor}</td>
              <td>{edableFruit}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Varijable;
