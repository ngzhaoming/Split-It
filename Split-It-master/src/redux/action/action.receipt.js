import { SET_RECEIPT } from '../type/type.contacts'

export const action_set_receipt = (image) => ({
    type: SET_RECEIPT,
    payload: image,
})