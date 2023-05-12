import { useEffect, useState } from "react";
import carsideleft from "./../assets/carsideleft.svg";
import carsideright from "./../assets/carsideright.svg";
type AfricaDataType = {
  name: AfricaNameType;
  maps: AfricaMapsType;
  population: number;
  borders: string[];
  car: AfricaCarSigns;
};
type AfricaNameType = {
  common: string;
};
type AfricaMapsType = {
  googleMaps: string;
};
type AfricaCarSigns = {
  signs: string[];
  side: string;
};
const Africa = () => {
  const [africaData, setAfricaData] = useState<AfricaDataType[]>([]);

  const getAfricaData = () => {
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAfricaData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAfricaData();
  }, []);

  return (
    <div className="container">
      Africa <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Map</th>
              <th>Poppulation</th>
              <th>Borders</th>
              <th>Cars</th>
            </tr>
          </thead>
          <tbody>
            {africaData.map((africa: AfricaDataType) => {
              return (
                <tr key={africa.name.common}>
                  <td>{africa.name.common}</td>
                  <td>
                    <a href={africa.maps.googleMaps}>Maps</a>
                  </td>
                  <td>{africa.population.toLocaleString()}</td>
                  <td>{africa.borders + ","}</td>
                  <td>
                    {africa.car.side === "left" ? (
                      <img src={carsideleft} alt="left" />
                    ) : (
                      <img src={carsideright} alt="right" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Africa;
