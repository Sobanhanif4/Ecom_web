import { getCartProductFromLs } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {

    let cartProducts = getCartProductFromLs();
    cartProducts = cartProducts.filter((curProd) => curProd.id != id);


    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));


    // to remove the div on click 
    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();

        // Show toast when product added to the cart 
        showToast("delete", id);
    }



updateCartValue(cartProducts);

};