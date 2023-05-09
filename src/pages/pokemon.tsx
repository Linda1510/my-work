import { useEffect, useState } from "react";
type PokemonType = {
  name: string;
  id: string;
  color: string;
};
type BerryType = {
  name: string;
  url: string;
};
const Pokemon = () => {
  const [data, setData] = useState<PokemonType>();
  const [berries, setBerries] = useState<BerryType[]>([]);
  const [flag, setFlag] = useState<string>();
  const pokemonSearch = (pokemonName: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  };

  const getBerries = () => {
    fetch("https://pokeapi.co/api/v2/berry")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setBerries(data.results);
      })
      .catch((err) => console.log(err));
  };
  const getCapitalCity = () => {
    fetch("https://restcountries.com/v3.1/capital/zagreb")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0].flags.png);
        setFlag(data[0].flag.png);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pokemonSearch("Venusaur");
    getBerries();
    getCapitalCity();
  }, []);

  return (
    <div className="container">
      Pokemon <hr />
      <div>
        {/* <h1>Berries</h1>
        <div>
          {berries.map((berry) => {
            return (
              <div>
                <div>{berry.name}</div>
                <a href={berry.url}>Link</a>
              </div>
            );
          })}
        </div> */}
      </div>
      <div>
        <h1>Flag</h1>
        <img src="" alt="" />
      </div>
    </div>
  );
};
export default Pokemon;
