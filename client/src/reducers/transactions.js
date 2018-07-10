import _ from 'lodash';
import {
    ADD_TRANSACTIONS,
    REMOVE_TRANSACTIONS,
    SET_TRANSACTIONS,
    SET_ORDER,
    MODIFY_TRANSACTION,
    START_NEW_TRANSACTION,
    FINISH_NEW_TRANSACTION
} from '../actions/transactions';

const initialState = {
    data: [],
    order: {
        field: 'id', // TODO: Switch to date
        ascending: false
    },
    new: null
};

const transactionsReducer = (state = initialState, action) => {
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
        case MODIFY_TRANSACTION:
            return {
                ...state,
                data: _.map(state.data, (txn) => {
                    if (txn.id === action.id) {
                        return {
                            ...txn,
                            ...action.changes
                        }
                    } else {
                        return txn;
                    }
                })
            };
        case START_NEW_TRANSACTION:
            return state.new ? { ...state } : {
                ...state,
                data: [ ...state.data, {
                    ...action.defaults,
                    id: action.id
                }],
                new: action.id
            };
        case FINISH_NEW_TRANSACTION:
            return {
                ...state,
                new: null
            };
        default:
            return { ...state };
    }
};

export default transactionsReducer;