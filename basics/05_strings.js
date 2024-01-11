const name="kartikey"
const repoCount=69

//console.log(name+repoCount+"value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //better way of writing string

const gamename = new String('kartikeypc'); //use inspect element for  for better understanding...

/* console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('i'));*/
//inspect element me jake sara dekh lo ya mdn docs aur ekk sara method ke bare me blog likho..
const newString=gamename.substring(0,4)
//console.log(newString);

const anotherString=gamename.slice(-8,4)
//console.log(anotherString);

const newStringone="   adarsh   "
console.log(newStringone)
console.log(newStringone.trim())

const url = "my%65kartikey.com"
url.replace('%65','me')
console.log(url.replace('%65','me'))
