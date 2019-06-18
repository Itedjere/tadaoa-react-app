import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import IncomeExpense from './Components/IncomeExpense';
import Footer from './Components/Footer';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/income-expense-form/" component={IncomeExpense} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
