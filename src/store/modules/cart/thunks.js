import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    const newList = [...list, product];

    localStorage.setItem("cart", JSON.stringify(newList));

    dispatch(addToCart(product));
};

export const removeFromCartThunk = (product) => (dispatch) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    const newList = list.filter(item => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(newList));
    dispatch(removeFromCart(newList));
}