// action types

export const ADD_TRANSACTIONS = 'ADD_TRANSACTIONS';
export const REMOVE_TRANSACTIONS = 'REMOVE_TRANSACTIONS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const SET_ORDER = 'SET_ORDER';
export const MODIFY_TRANSACTION = 'MODIFY_TRANSACTION';
export const START_NEW_TRANSACTION = 'START_NEW_TRANSACTION';
export const FINISH_NEW_TRANSACTION = 'FINISH_NEW_TRANSACTION';

// action creators

export const addTransactions = (transactions) => ({
    type: ADD_TRANSACTIONS,
    transactions,
});

export const removeTransactions = (transactions) => ({
    type: REMOVE_TRANSACTIONS,
    transactions,
});

export const setTransactions = (transactions) => ({
    type: SET_TRANSACTIONS,
    transactions,
});

export const setOrder = (field, ascending) => ({
    type: SET_ORDER,
    order: {
        field,
        ascending
    }
});

export const modifyTransaction = (id, changes = {}) => ({
    type: MODIFY_TRANSACTION,
    id,
    changes
});

export const startNewTransaction = (id, defaults = {}) => ({
    type: START_NEW_TRANSACTION,
    id,
    defaults
});

export const finishNewTransaction = () => ({
    type: FINISH_NEW_TRANSACTION
});
