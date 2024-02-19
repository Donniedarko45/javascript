const mynums=[1,2,3,4,5,6,7,8,9,10]
//const new_nums=mynums.filter((num)=>num>4)
//console.log(new_nums);

// another way

/*const new_nums=mynums.filter((num)=>{
    return num>4
})
console.log(new_nums);*/


const new_nums=[]

mynums.forEach((num)=>{
    if(num>4){
        new_nums.push(num)
    }
})
console.log(new_nums);