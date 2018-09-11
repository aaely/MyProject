import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from '../enhancers/monitorReducer';
import loggerMiddleware from '../middlewares/logger';
import reducers from '../reducers/index';

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(reducers, preloadedState, composedEnhancers);
    console.log(preloadedState);
    return store;
}