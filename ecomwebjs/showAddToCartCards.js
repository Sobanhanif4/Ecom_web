import products from "./api/products.json";
import { getCartProductFromLs } from "./getCartProducts";

let cartProducts = getCartProductFromLs();

let filterProducts = products.filter((curProd) => {
   return cartProducts.some((curElem) => curElem.id === curProd.id);
});


console.log(filterProducts);

const cartElement = document.querySelector("productCartContainer");
const templateContainer = document.querySelector("productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        
    })
}

// showing cart products 

showCartProduct();