let productViews = new WeakMap();
let cartItem = new WeakSet();
function incrementProductViews(productId){
 if(productViews.has(productId)){
    productViews.set(productId,productViews.get(productId)+1)
 }else{
    productViews.set(productId,1)
 }
}
function addToCart(productId){
    console.log(productId)
  if(cartItem.has(productId)){
    console.log("Product already in cart")
  }else{
    cartItem.add(productId)
    console.log("Product added to cart")
  }
}
const Product = {id:123}
// addToCart(Product)
// addToCart(Product)
incrementProductViews(Product)
incrementProductViews(Product)
incrementProductViews(Product)