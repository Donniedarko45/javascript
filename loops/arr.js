const programming=["js","rb","cpp","py","c","java"]
programming.forEach(function (item) {
    //console.log(item);
})

//by arrow function.

programming.forEach( (item)=> {
   // console.log(item);
})

function printMe(item){
    //console.log(item);
}
programming.forEach(printMe)


// we have to acess all index array and items

programming.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
