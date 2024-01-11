function calculateCartPrice(...num1) {
    return num1

}  // ... -> ko hi rest operator aur spread operator kahte hai rest ka matlab hai jitta bhi number h khule me unko ekkhata krke de do ye array me [200,400,600] me dalke de de..

console.log(calculateCartPrice(200,400,600))


function calculateCartPrice2(val1,val2, ...numb1){
     return numb1
}

console.log(calculateCartPrice2(200,400,600)) 

const user = {
    username: "kartikey",
    price: "999"
}
function handleObject(anyobjectwithcare){
  console.log(`username is ${anyobjectwithcare.username} and price is ${anyobjectwithcare.price}`);
}

handleObject(user)  


//function calling..

//+++++++++++++++++  direct function calling..


//function me direct object ko bhi call kar sakte hai..

handleObject({
  username: "no-one",
  price: 499
})

const mynewarray=[200,400,456]
function returnSecondvalue(getArray)
{
  return getArray[1]
}

console.log(returnSecondvalue(mynewarray));
console.log(returnSecondvalue([200,400,500,1000]));

