import { useEffect, useState } from "react";
import { json } from "react-router-dom";
type BreweryType = {
  name: string;
  city: string;
  id: string;
  country: string;
};

const Breweries = () => {
  const [data, setData] = useState<BreweryType[]>([]);
  const [dataByCity, setDataByCity] = useState<BreweryType[]>([]);
  const [dataSearch, setSearchData] = useState<any>([]);

  async function getBreweries() {
    fetch("https://api.openbrewerydb.org/v1/breweries")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  }
  const getBreweryByCity = (city: string, perPage: number) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=${perPage}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByCity(jsonData);
      })
      .catch((error) => console.error(error));
  };

  const searchData = () => {
    fetch("https://api.openbrewerydb.org/v1/breweries/search?query={search}")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setSearchData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  /*  const response = await fetch(
    "https://api.openbrewerydb.org/v1/breweries?by_city=london"
    );
    const jsonData = await response.json();

    console.log(jsonData);
    setData(jsonData); //state, kad ga definiramo koristimo u UI
  }*/
  useEffect(() => {
    getBreweries();
    getBreweryByCity("london", 10);
    searchData();
  }, []);

  return (
    <div className="container">
      <h1>Breweries</h1>
      <div>
        {data.length > 0 ? (
          data.map((brewery: BreweryType) => {
            return <div>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadnji parametar</div>
        )}
      </div>
      <h1>By City</h1>
      <div>
        {dataByCity.map((brewery: BreweryType) => {
          return <div key={brewery.id}>{brewery.name}</div>;
        })}
      </div>
      <div>
        <h1>Search</h1>
      </div>
    </div>
  );
};
export default Breweries;
