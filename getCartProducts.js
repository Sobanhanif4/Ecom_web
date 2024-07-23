import { updateCartValue } from "./updateCartValue";


export const getCartProductFromLs = () => {
    let cartProducts = localStorage.getItem("cartProductLS");
    if (!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
    
    // Update the cart button value
    updateCartValue(cartProducts);

    return cartProducts;
};