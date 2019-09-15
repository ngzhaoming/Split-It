import { combineReducers } from 'redux';
import reducercontact from './reducer.contacts';
import reducerreceipt from './reducer.receipt';

export default combineReducers({
    contact: reducercontact,
    receipt: reducerreceipt,
})