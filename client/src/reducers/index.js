import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import surveysReducer from './surveysReducer';
import productsReducer from './productsReducer'

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer,
    products: productsReducer
});
