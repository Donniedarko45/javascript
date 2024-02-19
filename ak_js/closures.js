function x(){
    var name="kartikey"
    function y(){
        // y is a inner function that forms the closure
        console.log(name); //variable jo parent function me use kiya tha uska use kr rhe
    }
    y();
}
var z=x();
console.log(z);