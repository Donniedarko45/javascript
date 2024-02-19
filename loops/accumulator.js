const mynums=[1,2,3,4,5,6]
const my_total= mynums.reduce(function(acc,current_val){
    console.log(`accumulator: ${acc} and current value: ${current_val}`);
    return acc+current_val;
},0) //accumulator value is starting with zero
console.log(my_total);


