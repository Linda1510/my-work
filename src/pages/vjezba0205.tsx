type MyData = {
    myName:string;
    myAge:number;
};
const Vjezba0205=()=>{
    const mojaVjezba:MyData[]=[
       { 
        myName:"Nikolina",
        myAge:40,
    },
    ];
//zadatak2
   let mojeGodine=mojaVjezba[0].myAge;
   for(let i=0; i < mojaVjezba.length; i++){
    if(mojaVjezba[i].myAge < mojeGodine){
        mojeGodine=mojaVjezba[i].myAge;
    };
   };
console.log(`nemam više od`+mojeGodine);

//zadatak3
const myName="Nikolina"
console.log(myName.length);

//zadatak4
 let numberList=[2,3,5,8,12,19,25,65,52,11];  
  for ( let i = 0; i < numberList.length; i++);
  console.log(numberList);
  
  
  


    return(
        <div className="container">
            <h1>Vjezba 0205</h1>
            <hr />
            <div>
                {
                    mojaVjezba.map((podaci)=>{
                        return(
                            <div>
                                
                            {podaci.myName} {podaci.myAge}
                            </div>

                        );
                    })}
                
            </div>
        </div>
    );
};
export default Vjezba0205;