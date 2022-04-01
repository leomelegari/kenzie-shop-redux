import { ADD_CART, REMOVE_CART } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = defaultState, action) => {
    const { product } = action;
    switch (action.type) {
        case ADD_CART:
            return [...state, product];

        case REMOVE_CART:
            return [...product];

        default:
            return state;
    }
};

export default cartReducer;