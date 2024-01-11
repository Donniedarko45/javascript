function one(){
    const username="kartikey"

    function two(){
        const website="youtube"
        console.log(username)
        console.log(website);
    }
   // console.log(website);  hmesha function ke andar print karna hota hai

    two()
}

one()

if(true){
    const username="kartikey"
    if(username==="kartikey"){
        const website="youtube"
        console.log(username+website);
    }
}



//+++++++++++++++++something important++++++++++++++++++++++++++++
console.log(addone(5)) 
function addone(num){  //here in this syntax we can call the function before initialisation...
  return num+1
}
addone(5)
//console.log(addTwo(5)) in this way of initialisation where another variable is holding the value of fxn we cannotcall the function before initialisation but in above syntax we can
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))