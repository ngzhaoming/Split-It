import { SET_RECEIPT } from '../type/type.receipt';

const init_state = {
    receipt: '',
}

export default (state = init_state, action) => {
    switch(action.type) {
        case SET_RECEIPT:
            return {
                ...state,
                receipt: action.payload
            };
        default:
            return {
                ...state
            };
    }
}