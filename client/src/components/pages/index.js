import React from 'react';

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
        component: <p> Transactions Page </p>
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: 'cogs',
        component: <p> Settings Page </p>
    },
];

export default Pages;