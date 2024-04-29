const data = [
    { id: 1, name: 'John', age:21 },
    { id: 2, name: 'pulkit', age:54 },
    { id: 3, name: 'adarsh',age:27 },
    { id: 4, name: 'kartikey',age:41 },
    { id: 5, name: 'ram',age:40 }
  ];

  const transformed = data.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue.age]){
        accumulator[currentValue.age]=++accumulator[currentValue.age];
    } 
    else{
        accumulator[currentValue.age]=1;
    }
    return accumulator;
  }, {});
  console.log(transformed);

const output= data.map(x=>x.id + "-" + x.name);
//console.log(typeof(output)) 


// filter out name of all the people whose name is 30

const out=data.filter((x)=>x.age<30).map((x)=>x.name);
console.log(out);

// do this with reduce
const res2=data.reduce((accumulator,currentValue)=>{
  if(currentValue.age<30){
    accumulator.push(currentValue.name)
  }
  return accumulator;
},[])
console.log(res2)

const res3=data.reduce((accumulator,currentValue)=>{
  if(currentValue.age>30){
    accumulator.push(currentValue.name)
  }
  return accumulator;
},[])
console.log(res3)