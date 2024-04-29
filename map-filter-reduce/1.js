//map=>map-->  koi ekk array suppose elements hai usme const a=[1,2,3,4,5]; toh without changing the actual array i.e a ekk naya array dega jaisa jarurat ho. suppose squaring cahiye toh [1,4,9,16,25] 
const array=[5,8,4,7]
function triple(x){
    return x*3
}
const result=array.map(triple)
console.log(result);

// reduce-->reduce() method is used to reduce the elements of an array to a single value. It executes a provided function for each value of the array (from left to right), resulting in a single output value.


const arr=[5,1,4,78,12]

function findSum(arr){
  let sum=0
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
  }
  return sum;
}
console.log(findSum(arr));

//takes two argument acc,curr; reduce will iterate over each and every element of array the curr represent the current value in the array

const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);  //0 is a initial value of accumulator
console.log(output)

//finding maximum value in the array

function findMax(arr){
  let max=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
       max=arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));


//lets find max by reduce method..

const max1=arr.reduce(function(max,curr){
  if(curr>max){ // it is basically current is greater than its previous value and when curr iterates and max ie is accumulator which is previous value if 2nd is greater than 1st here 2nd is curr and 1st is max{accumulator} then max ie is acc =curr;
    max=curr
  }
  return max;
},0)
console.log(max1)

