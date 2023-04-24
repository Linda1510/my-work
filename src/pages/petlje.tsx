const Petlje = () => {
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    const inputValue = Number(input.value);
    console.log(inputValue);

    //  if (inputValue % 2) {
    //  console.log("paran broj");}

    //Zadatci
    //1. ispisati u konzolu jeli zadani broj neparan

    if (inputValue % 2) {
      console.log("paran broj");
    } else {
      console.log("neparan broj");
    }
    //2. ispisati u konzolu brojeve od 0 do zadanog broja

    for (let i = 0; i < 9; i++) {
      console.log(i);
    }

    //3. izračunaj opseg kruga gdje je zadani broj polumjer (pi*r*2)

    const pi: number = 3.14;
    const opseg = pi * inputValue * 2;
    console.log(opseg);
    //do zadanog broja ispistai u stringu
  };
  return (
    <div className="container">
      <h1>Petlje</h1>
      <hr />
      <div>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
    </div>
  );
};

export default Petlje;
