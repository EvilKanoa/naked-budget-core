import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { addTransactions, removeTransactions } from '../../../actions/transactions';
import { getSortedTransactions } from '../../../selectors/transactions';
import Icon from '@fortawesome/react-fontawesome';
import './index.css'

const Header = connect(
    null,
    (dispatch) => bindActionCreators({
        addTransactions,
        removeTransactions
    }, dispatch)
)(class Header extends PureComponent {
    actions = () => [
        {
            title: 'Add',
            icon: 'plus-circle',
            handler: () => {},
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

    render = () => {
        return (
            <div id='page-transactions-header' className='flex-fixed-child'>
                { _.map(this.actions(), (action) => (
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
    }
});

const Table = connect(
    (state) => ({
        transactions: getSortedTransactions(state)
    }),
    null
)(class Table extends PureComponent {
    render = () => {
        console.log(this.props.transactions);
        return (
            <div id='page-transactions-table' className='flex-fill-child'>
                { _.map(this.props.transactions, (txn) =>
                    <p>{txn.id}</p>
                )}
            </div>
        );
    }
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
