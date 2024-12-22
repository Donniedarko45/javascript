const cart = [{itemName:"shoes",price:45},{itemName:"bag",price:897},{itemName:"kurta",price:999},{itemName:"pant",price:1199}];


let totalPrice=0;
cart.map(x=>totalPrice+=x.price);
console.log(totalPrice)