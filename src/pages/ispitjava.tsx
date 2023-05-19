import { useEffect, useState } from "react";
type IspitJavaType = {
  trackId: number;
  collectionName: string;
  artistName: string;
};

const Ispitjava = () => {
  const [ispitData, setIspitData] = useState<IspitJavaType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const getIspitJava = (inputValue: string) => {
    fetch(`https://itunes.apple.com/search?term=${inputValue}&entity=song`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIspitData(data.results);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <input onChange={(e) => setInputValue(e.target.value)} type="search" />
      <button
        onClick={() => {
          getIspitJava(inputValue);
        }}
        className="todo"
      >
        Add
      </button>
      <div>
        <thead>
          <tr>
            <th>Artist Name</th>
            <th>Song Title</th>
          </tr>
          <tbody></tbody>
        </thead>
      </div>
    </div>
  );
};
export default Ispitjava;
