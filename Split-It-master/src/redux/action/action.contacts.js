import {STORE_CONTACTS} from '../type/type.contacts'

export const action_store_contacts = (contacts) => ({
    type: STORE_CONTACTS,
    payload: contacts,
})