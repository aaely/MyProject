import * as cartApi from '../components/cart/cartApi';
import { fetchCartSuccess, addToCartSuccess } from "../actions";
import { FETCH_CART, ADD_TO_CART } from "../actions/types";
import { call, put, takeLatest, fork } from 'redux-saga/effects';

export function* fetchCart() {
    const cart = yield call(cartApi.fetch);
    yield put(fetchCartSuccess(cart));
    console.log('hello');
}

export function* addToCart(action) {
    const cart = yield call(cartApi.addToCart, action.productId, action.quantity);
    yield put(addToCartSuccess(cart));
    console.log('hello');
}

export function* watchFetchCart() {
    yield takeLatest(FETCH_CART, fetchCart);
    console.log('hello');
}

export function* watchAddToCart() {
    yield takeLatest(ADD_TO_CART, addToCart);
    console.log('hello');
}

export default function* () {
    yield fork(watchFetchCart);
    yield fork(watchAddToCart);
    console.log('hello');
}