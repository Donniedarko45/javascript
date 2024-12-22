//async=>

//to create an async fxn async before function => async function always returns promise

async function getData() {
  return "hello";
} //either you return a promise or you dont return  a promise it will wrap a non promise thing into promise and return it

const dataPromise = getData();
// how do we get the data ?
dataPromise.then((res) => console.log(res));

const pr = new Promise((resolve, reject) => {
  resolve("promise resolved value!!!");
});

async function promiseDatafxn() {
  return pr;
}

const promiseData = promiseDatafxn();
promiseData.then((res) => console.log(res));

