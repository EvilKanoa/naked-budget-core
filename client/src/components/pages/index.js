import React from 'react';
import Transactions from './Transactions'

const Pages = [
    {
        id: 'budget',
        title: 'Budget',
        icon: 'money-bill',
        component: <p> Budget Page </p>
    },
    {
        id: 'monthly',
        title: 'Monthly',
        icon: 'calendar-alt',
        component: <p> Monthly Page </p>
    },
    {
        id: 'transactions',
        title: 'Transactions',
        icon: 'credit-card',
        component: <Transactions />
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: 'cogs',
        component: <p> Settings Page </p>
    },
];

export default Pages;