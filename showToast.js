export function showToast(operation, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    // set the text content of the toast based on the operation 

    if (operation === "add") {
        toast.textContent = `product with ID ${id} has been added.`;
    } else {
        toast.textContent = `product with ID ${id} has been deleted.`;
    }

    document.body.appendChild(toast);


    // Automatically remove the toast after a few seeconds 

    setTimeout(() => {
        toast.remove();
    }, 2000);

};