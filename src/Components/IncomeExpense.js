import React, { Component } from 'react';
import Navigation from './Navigation';

class IncomeExpense extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="subheader">
                    <div className="transparent-bg"></div>
                    <div className="container">
                        <div className="header-top">
                            <div className="banner">
                                <h1>Income And Expense Form</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="formcontainer">
                    <div className="container" id="mycontainer"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default IncomeExpense;