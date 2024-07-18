import { getCartProductFromLs } from "./getCartProucts";
import { updateCartValue } from "./updateCartValue";


// getCartProductFromLs();

export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLs();

    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;
    // console.log(quantity, price);
    price = price.replace("PKR", "");



    price = Number(price * quantity);
    quantity = Number(quantity);

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

    if (existingProd && quantity > 1) {
        console.log(`quantity`, quantity);
    }

    if (existingProd) {
        // alert("it's duplicate")
        return false
    }
    // let updateCard = {id, quantity, price}

    arrLocalStorageProduct.push({ id, quantity, price });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    // Update the cart button value

    updateCartValue(arrLocalStorageProduct);
};