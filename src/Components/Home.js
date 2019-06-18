import React, { Component } from 'react';
import Navigation from './Navigation';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="header">
                    <div className="transparent-bg"></div>
                    <div className="container">
                        <div className="header-top">

                            <div className="banner">
                                <h1>Sign Your Property Tax Document</h1>
                            </div>

                            <div id="small-dialog">
                                <div className="search-top">
                                    <div className="login">
                                        <input type="text" placeholder="Type Account Number" id="account_number" />
                                        <input type="submit" value="Search Property" id="fetchAccountDetails" />		
                                    </div>
                                </div>				
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Home;