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
    if (cart.length<1){return 
   itemName = cart[i].itemName
   itemPrice = cart[i].itemPrice
    name = " " + itemName + " at $" + itemPrice + ","
    if (i===cart.length+1){
      name = " " + itemName + " at $" + itemPrice + "."
    }
  }
  name = "In your cart, you have" + name
  return name
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
