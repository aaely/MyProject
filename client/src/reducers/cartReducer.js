import { FETCH_CART, ADD_TO_CART } from '../actions/types';

const initialState = {
    isLoading: false,
    error: null,
    cart: { items: [] }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_CART:
            return {
                ...state,
                cart: { items: action.payload }
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart: { items: action.payload }
            };
        default:
            return state;
    }
}