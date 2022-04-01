export const addToCart = (product) => ({
    type: "@cart/ADD",
    product,
});

export const removeFromCart = (product) => ({
    type: "@cart/REMOVE",
    product,
})