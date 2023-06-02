import { frontendRazred } from "./../data/frontendRazred";
type GenderType = "male" | "female";
export type StudentType = {
  name: string;
  lastName: string;
  age: number;
  gender: GenderType;
  height: number;
  hobby: string;
  employed: boolean;
  favoriteColor: string;
};

const Vjezba2804 = () => {
  //zadatak1
  let najmladaOsoba = frontendRazred[0].age;
  for (let i = 0; i < frontendRazred.length; i++) {
    if (frontendRazred[i].age < najmladaOsoba) {
      najmladaOsoba = frontendRazred[i].age;
    }
  }
  console.log(najmladaOsoba);
  //zadatak1.2 - Kreiraj varijablu u koju spremiš svoje ime (string)
  // Kreiraj varijablu u koju spremiš svoje godine (number)
  //- ispiši u browseru (u DOM-u) svoje ime i godine iz tih varijabli

  //2.2 Zadatak
  //Provjeri jeli 40 broj veci od varijable s tvojim godinama i ako je ispiši u konzolu "imam više od 40 godina", a ako nije ispiši "nemam više od 40 godina"

  return (
    <div className="container">
      <div>test</div>
      <h1>Vjezba 2804</h1>
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hobby</th>
              <th>favouriteColor</th>
            </tr>
          </thead>
          <tbody>
            {frontendRazred.map((student) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.hobby}</td>
                  <td>{student.favoriteColor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ul>
          {frontendRazred.map((podaci) => {
            return (
              <li>
                {podaci.name} {podaci.lastName} {podaci.age}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Vjezba2804;
