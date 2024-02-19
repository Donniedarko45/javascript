const programming=["js","rb","cpp","py","c","java"]
const values=programming.forEach((item)=>{
    console.log(item);
    return item;
})

console.log(values); // for in loop dont return anything thatswhy it is undefined...

