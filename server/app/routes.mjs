import express from 'express';

export default () => express.static('client/build');