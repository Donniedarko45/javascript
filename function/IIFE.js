//immediatedly invoked function expressions (IIFE)

(function chai(){
    //nammed iife... as iska naam declare kiya hai
    console.log(`DB CONNECTED`)
})();//2 iife agar rkhna h ekk file me toh ; ekk ko end bhi krna hoga..

//  ()()first parathesis iz for function definition and second iz for execution....

//use mdn docs why to use IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('kartikey')
  