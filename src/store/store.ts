import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cardReducer } from './reducer';

export const store = createStore(cardReducer, applyMiddleware(thunk));
