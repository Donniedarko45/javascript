//creating an promise

const cart = ["shoes", "pants", "kurta"]

const promise = createOrder(cart); 

promise.then(function(orderId){
   // proccedToPayment(orderId);
   console.log(orderId);
}).catch(function(err){
    console.log(err.message)
})

//producer end..

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
       //create an order...
       //validating cart... 
       //order Id
       if(!validateCart(cart)){
        const err =new Error("Cart is not valid.");
          reject(err);
       } 
       //logic for createOrder
       const orderId="12345";
       if(orderId){
        setTimeout(function(){
            resolve(orderId);
        },5000)
       }
    });
    return pr;
}

function validateCart(cart){
    return false;
}



//proceedToPayment(orderId)

 