let a=79; //global declaration of scope..
if(true)
{
    let a=10
    const b=20  
    var c=30// if ke andar wla block scope hota jisse bahar ki duniya me kya likha farak nai padta
    console.log("inner:",a);

}
console.log(a);
