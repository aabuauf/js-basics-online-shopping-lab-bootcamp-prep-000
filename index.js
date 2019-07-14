var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var object = new Object();
 object["itemName"]=item
 object["itemPrice"]=Math.floor(Math.random() * 100);
 cart.push(object)
 return item + " has been added to your cart."
}

function viewCart() {
  // write your code here
  for (var i= 0; i< cart.length;i++){
   itemName = cart[i]
    name = cart[i]
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
