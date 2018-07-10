import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import {
    addTransactions,
    removeTransactions,
    modifyTransaction,
    startNewTransaction,
    finishNewTransaction
} from '../../../actions/transactions';
import {
    getSortedTransactions,
    getNewTransaction,
    getNewId,
    getNextId
} from '../../../selectors/transactions';
import Transaction from '../../../models/transaction';
import Icon from '@fortawesome/react-fontawesome';
import './index.css'

const actions = (props) => [
    {
        title: 'Add',
        icon: 'plus-circle',
        handler: () => props.startNewTransaction(props.nextId),
        subtext: 'Add a new transaction'
    },
    {
        title: 'Remove',
        icon: 'minus-circle',
        handler: () => {},
        subtext: 'Remove selected transactions'
    },
    {
        title: 'Duplicate',
        icon: 'copy',
        handler: () => {},
        subtext: 'Duplicate selected transactions'
    }
];

const Header = connect(
    (state) => ({
        nextId: getNextId(state)
    }),
    (dispatch) => bindActionCreators({
        addTransactions,
        removeTransactions,
        startNewTransaction
    }, dispatch)
)((props) => {
    return (
        <div id='page-transactions-header' className='flex-fixed-child'>
            { _.map(actions(props), (action) => (
                <span
                    className='button'
                    onClick={action.handler}
                    title={action.subtext}
                    key={action.title}
                >
                    <Icon icon={action.icon}/>
                    <span className='button-title'> {action.title} </span>
                </span>
            ))}
        </div>
    );
});

const TransactionRow = (props) => {
    const { transaction, change, save } = props;
    const makeInput = (field) => (
        <input
            className='transaction-field'
            type='text'
            value={transaction[field]}
            onInput={({ target }) => change(transaction.id, { [field]: target.value })}
        />
    );

    return (
        <tr key={transaction.id}>
            <td><input
                className='transaction-field'
                type='date'
                value={transaction.date}
                onInput={({ target }) => change(transaction.id, { date: target.value })}
                onBlur={save}
            /></td>
            <td>{makeInput('payee')}</td>
            <td>{makeInput('categoryId')}</td>
            <td>{makeInput('note')}</td>
            <td>{makeInput('inflow')}</td>
            <td>{makeInput('outflow')}</td>
        </tr>
    );
};

const Table = connect(
    (state) => ({
        transactions: getSortedTransactions(state),
        newId: getNewId(state),
        newTransaction: getNewTransaction(state)
    }),
    (dispatch) => bindActionCreators({
        modifyTransaction,
        finishNewTransaction
    }, dispatch)
)((props) => {
    const { transactions, newId, newTransaction, modifyTransaction, finishNewTransaction } = props;
    const isEmpty = transactions.length === 0 && newId == null;
    const saveNewTransaction = () => {
        if (new Transaction(newTransaction).validate()) {
            finishNewTransaction();
        }
    };

    return (
        <table id='page-transactions-table' className='flex-fill-child'>
            <thead>
            <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Payee</th>
                <th>Note</th>
                <th>Inflow</th>
                <th>Outflow</th>
            </tr>
            </thead>
            <tbody>
            { newId !== null &&
                <TransactionRow
                    transaction={newTransaction}
                    change={modifyTransaction}
                    save={saveNewTransaction}
                />
            }
            { isEmpty ?
                <tr key='empty'>
                    <td colSpan={6}>No transactions found</td>
                </tr>
                :
                _.map(transactions, (txn) => (
                    <TransactionRow
                        transaction={txn}
                        change={modifyTransaction}
                    />
                ))
            }
            </tbody>
        </table>
    );
});

const Transactions = () => {
    return (
        <div id='page-transactions' className='flex-vertical'>
            <Header/>
            <Table/>
        </div>
    );
};

export default Transactions;
