export const incrementQuantity = ()=>({
    type:"INCREMENT_QUANTITY",
});
export const decrementQuantity = ()=>({
    type:"DECREMENT_QUANTITY",
});
export const addToCart = (product,quantity)=>({
    type:"ADD_TO_CART",
    payload: {item: product, quantities: quantity},
});
export const removeFromCart = ()=>({
    type:"REMOVE_CART",
});