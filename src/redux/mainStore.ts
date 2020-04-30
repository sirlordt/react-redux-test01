import { createStore, combineReducers } from 'redux';
import currentItem from './reducers/currentItem';
import results from './reducers/results';
import suggestions from './reducers/suggestions';

const mainReducer = combineReducers( 
                                     {
                                       currentItem,
                                       results,
                                       suggestions,
                                     }
                                   );

const mainStore = createStore( mainReducer );

export default mainStore;