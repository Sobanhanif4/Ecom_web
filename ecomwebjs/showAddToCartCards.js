import products from "./api/products.json";
import { getCartProductFromLs } from "./getCartProducts";

let cartProducts = getCartProductFromLs();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});


console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, stock, price } = curProd;


        let productClone = document.importNode(templateContainer.content, true);

        const LSActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;

        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productName").textContent = name;
        // productClone.querySelector(".stock").textContent = stock;
        // productClone.querySelector(".price").textContent = price;

        cartElement.appendChild(productClone); 
    });
};

// showing cart products 

showCartProduct();