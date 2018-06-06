import React from 'react';
import { Callout, Colors } from 'react-foundation';
import './index.css';

const App = props => {
  return (
    <div className="app">
      <center>
        <Callout color={Colors.WARNING}>
          <p> NakedBudget - The budgeting app that exposes your money to reality </p>
          <h3> Under Construction... </h3>
        </Callout>
      </center>
    </div>
  );
};

export default App;
