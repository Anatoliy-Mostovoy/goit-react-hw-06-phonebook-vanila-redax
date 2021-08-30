import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import componentReducer from './contacts/contacts-reducer';

const reducer = combineReducers({
  contacts: componentReducer.contactsReducer,
  filter: componentReducer.filterReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
