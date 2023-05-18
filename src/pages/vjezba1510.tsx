import { useEffect } from "react";

const Vjezba1505 = () => {
  //1. Funkcija koja zbraja dva broja iz parametara
  const add = (a: string, b: number) => {
    return a + b;
  };
  //2. Funkcija koja spaja dva array-a stringova
  const concatArrays = (a: string, b: string) => {
    return a.concat(b);
  };

  //3. Funkcija koja treba u konzolu ispisati brojeve od 1 do 10
  const countToTen = () => {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }
  };

  //4. Funkcija koja zbraja sve broojeve iz array-a
  const sumArray = (numbers: number[]) => {
    let sum = 0;

    for (let i = 0; i <= numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  };

  //5. Funkcija koja će vratiti puno ime iz objekta user
  type UserType = {
    firstName: string;
    lastName: string;
  };
  const user: UserType = {
    firstName: "Ivan",
    lastName: "Sakoman",
  };

  const getFullName = (person: UserType) => {
    return person.firstName + person.lastName;
  };

  getFullName(user);

  //6. Funkcija koja pretvara celsius to fahrenheit
  //formula =>  °C * 1.8 + 32 = °F
  const celsiusToFahrenheit = (celsius: number) => {
    return celsius * (1.8 + 32);
  };

  //7. Funkcija koja ispisuje string naopako
  const reverseString = (str: any) => {
    let reversedStr = "";
    for (let i = str.length - 1; i > 0; i--) {
      reversedStr += str[i - 1];
    }
    return reversedStr;
  };
  //8.Funkcija kreira palindrom što ne valja?
  const isPalindrome = (str: string) => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  //9. Funkcija kreira fibonacciev niz ispravi pogresku:
  const fibonacciSequence = (n:number) => {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [1];
    } else if (n === 2) {
      return [1, 1];
    } else {
      const sequence = [1, 1];
      for (let i = 3; i <= n; i++) {
        sequence.push(sequence[i] + sequence[i - 1]);
      }
      return sequence;
    }
  };

  //10. Funkcjia filtrira sve parne brojeve iz array-a ispravi gresku
  const filterEvenNumbers = (arr:number[]) => {
    return arr.filter((num) => {
      if (num % 2 === 0) {
        return num;
      }
    });
  };

  useEffect(() => {
    console.log(filterEvenNumbers([4,3,2]));
    //console.log(add(1, 3));
    //console.log(countToTen());
    //console.log(getFullName(user));
    // console.log(sumArray([1, 2, 3, 5]));
    //Ovdje možemo pokretati funkciju koju testiramo
  }, []);
  return <div className="container"></div>;
};

export default Vjezba1505;
