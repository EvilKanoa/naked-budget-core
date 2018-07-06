import _ from 'lodash';
import {
    ADD_TRANSACTIONS,
    REMOVE_TRANSACTIONS,
    SET_TRANSACTIONS,
    SET_ORDER
} from '../actions/transactions';

const initialState = {
    data: [],
    order: {
        field: 'id', // TODO: Switch to date
        ascending: false
    }
};

const transactionsReducer = (state = initialState, action) => {
    if (action.type === ADD_TRANSACTIONS) {
        console.log(action);
        console.log([...state.data]);
        console.log([...state.data, ...action.transactions]);
    }
    switch (action.type) {
        case ADD_TRANSACTIONS:
            return {
                ...state,
                data: [ ...state.data, ...action.transactions ]
            };
        case REMOVE_TRANSACTIONS:
            return {
                ...state,
                data: _.filter(state.data, (txn) => !_.find(action.transactions, (id) => txn.id === id))
            };
        case SET_TRANSACTIONS:
            return {
                ...state,
                data: [ ...action.transactions ]
            };
        case SET_ORDER:
            return {
                ...state,
                order: action.order
            };
        default:
            return { ...state };
    }
};

export default transactionsReducer;