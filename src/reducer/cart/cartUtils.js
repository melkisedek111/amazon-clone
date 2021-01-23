export const addToCartItem = (cart, item) => [...cart, item];

export const removeItemFromCart = (cart, index) => {
    let newCart = [...cart];
    newCart.splice(index, 1);
    return newCart;
}