const cart = [{itemName:"shoes",price:45},{itemName:"bag",price:897},{itemName:"kurta",price:999},{itemName:"pant",price:1199}];

createOrder(cart)
  .then(function(orderId){
    console.log(orderId);
    return orderId;
  })
  .then(function(orderId){
    return proceedToPayment(orderId);
  })
  .then(function(paymentStatus){
    console.log(paymentStatus);
    return orderSummary(cart);
  })
  .then(function(totalPrice){
    console.log("Total Price:", totalPrice);
    return updateWalletBalance(walletbalance, totalPrice);
  })
  .then(function(newBalance){
    console.log("Updated Wallet Balance:", newBalance);
  })
  .catch(function(err){
    console.log(err.message);
  });

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        if (!validateCart(cart)){
            const err = new Error("cart is empty");
            reject(err);
        }
        const orderId = "123";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 2000);
        }
    });
    return pr;
}


function orderSummary(cart){
    let totalPrice = 0;
    const pr = new Promise(function(resolve, reject){
        cart.map(x => totalPrice += x.price);
        resolve(totalPrice);
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("payment successful");
    });
}

function validateCart(cart){
    return cart.length > 0;
}

const walletbalance = 78965;

function updateWalletBalance(walletbalance, totalPrice){
    walletbalance -= totalPrice;
    return walletbalance;    
}
