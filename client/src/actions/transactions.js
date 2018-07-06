// action types

export const ADD_TRANSACTIONS = 'ADD_TRANSACTIONS';
export const REMOVE_TRANSACTIONS = 'REMOVE_TRANSACTIONS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const SET_ORDER = 'SET_ORDER';

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
