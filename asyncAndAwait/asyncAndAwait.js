const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value!!!");
});

async function handlePromise() {
  const val = await p;
  console.log(val);
}
handlePromise();

// what is await? it is a keyword that can be used only inside a async function

//diving deep

const p1 = new Promise((resolve, response) => {
  setTimeout(() => {
    resolve("new Promise resolved!!!");
  }, 4000);
});

const p2 = new Promise((resolve, response) => {
  setTimeout(() => {
    resolve("new Promise resolved 2!!!");
  }, 3000);
});

async function newPromise() {
  const val = await p1;
  console.log("hello no-one");
  console.log(val);

  const val2 = await p2;
  console.log("hello no-one again");
  console.log(val2);
}
newPromise();
// javascript is a synchronous single threaded language

// real world example

const API_URL = "https://api.github.com/users/Donniedarko45";

async function example() {
  try {
    const data = await fetch(API_URL); // fetch gives promise read about fetch
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}

example();

