import { useEffect, useState } from "react";
type EuropeDataType = {
  name: EuropeNameType;
  capital: string;
  flags: EuropeFlags;
  currency:EuropCurrency;
};

type EuropeNameType = {
  common: string;
};
type EuropeFlags = {
  png: string;
};
type EuropCurrency={
  [currency:string] : {
    name:string;
    symbol:string

  }
}
const Europe = () => {
  const [europeData, setEuropeData] = useState<EuropeDataType[]>([]);

  const getEurope = () => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setEuropeData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEurope();
  }, []);

  return (
    <div className="container">
      Countries <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Flag</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {europeData.map((europe: EuropeDataType) => {
              return (
                <tr>
                  <td>{europe.name.common}</td>
                  <td>{europe.capital}</td>
                  <td>
                    <img src={europe.flags.png} alt="flag" />
                  </td>
                  <td>
                  {Object.keys(europe.currency).map((currency) => {
                    return (
                      <div>
                  {Object.keys(europe.currency).map((currency) => {
                        {europe.[currency].name},{" "}
                  {Object.keys(europe.currency).map((currency) => {
                    {countries.[currency].symbol}
                      </div>
                    );
                  })}
                </td>
                <td>{countries.capital}</td>
              </tr>
            );
          })}
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
export default Europe;
