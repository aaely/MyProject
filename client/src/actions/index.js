import axios from 'axios';
import { FETCH_ACCESS_LOG, FETCH_USER, FETCH_SURVEYS, FETCH_PRODUCTS, ADD_TO_CART, FETCH_CART } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const fetchProducts = () => async dispatch => {
    const res = await axios.get('/api/store');
    dispatch({ type: FETCH_PRODUCTS, payload: res.data});
};

export const fetchCart = () => async dispatch => {
    const res = await axios.get('/api/cart');
    dispatch({ type: FETCH_CART, payload: res.data });
};

export const addToCart = (items) => async dispatch => { 
    const res = await axios.post('api/cart/add', items);
    dispatch({ type: ADD_TO_CART, payload: res.data });
    
    fetchCart();
};

export const submitAccessForm = (values, history) => async dispatch => {
    const res = await axios.post('/api/accessForm', values);
    history.push('/accessForm');
    dispatch({ type: FETCH_ACCESS_LOG, payload: res.data});
};
