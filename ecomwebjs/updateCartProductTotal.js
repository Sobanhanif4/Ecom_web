import { getCartProductFromLs } from "./getCartProducts";


export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal")
    let productFinalTotal = document.querySelector(".productFinalTotal");


    let localCartProducts = getCartProductFromLs();
    let intitialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    }, intitialValue);
    // console.log(totalProductPrice);

    productSubTotal.textContent = `PKR${totalProductPrice}`;
    productFinalTotal.textContent = `PKR${totalProductPrice + 50}`;
};