import {STORE_CONTACTS} from '../type/type.contacts';

const init_state = {
    contactList: [],
}

export default (state = init_state, action) => {
    switch(action.type) {
        case STORE_CONTACTS:
            return {
                ...state,
                contactList: action.payload
            };
        default:
            return {
                ...state
            };
    }
}