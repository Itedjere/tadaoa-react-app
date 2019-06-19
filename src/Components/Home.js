import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Table } from 'reactstrap';
    
import Navigation from './Navigation';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            backdrop: 'static',
            accountNumber: '',
            accountapi: 'api/sign_document/autosearch_property.php'
        };

        this.toggle = this.toggle.bind(this);
        this.retrieveData = this.retrieveData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    retrieveData(e) {
        e.preventDefault();
        if (this.state.accountNumber == "") return;

        //make a call to api
        axios.post(this.state.accountapi, {
            accountNumber: this.state.accountNumber
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

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
                                        <input 
                                            type="text" 
                                            placeholder="Type Account Number" 
                                            id="account_number"
                                            onChange={this.handleChange}
                                            value={this.state.accountNumber}
                                            name="accountNumber"
                                        />
                                        <input 
                                            type="submit" 
                                            value="Search Property" 
                                            id="fetchAccountDetails"
                                            onClick={this.retrieveData}
                                        />		
                                    </div>
                                </div>				
                            </div>
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
                    <ModalHeader toggle={this.toggle}>Account Details</ModalHeader>
                    <ModalBody>
                        <p>Confirm Your Account Details</p>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <th>Owner Name</th>
                                    <td>Godspower Itedjere</td>
                                </tr>
                                <tr>
                                    <th>Owner Address</th>
                                    <td>This is my own address</td>
                                </tr>
                                <tr>
                                    <th>Owner City / State / Zip</th>
                                    <td>Warri, Nigeria, 23401</td>
                                </tr>
                                <tr>
                                    <th>Account Number</th>
                                    <td>0547891546</td>
                                </tr>
                                <tr>
                                    <th>Situs Address</th>
                                    <td>This is a situs address</td>
                                </tr>
                                <tr>
                                    <th>Legal Description</th>
                                    <td>My Own Legal Description</td>
                                </tr>
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>

            </React.Fragment>
            
        );
    }
}

Modal.propTypes = {
    // boolean to control the state of the popover
    isOpen:  PropTypes.bool,
    autoFocus: PropTypes.bool,
    // if modal should be centered vertically in viewport
    centered: PropTypes.bool,
    // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
    size: PropTypes.string,
    // callback for toggling isOpen in the controlling component
    toggle:  PropTypes.func,
    role: PropTypes.string, // defaults to "dialog"
    // used to reference the ID of the title element in the modal
    labelledBy: PropTypes.string,
    keyboard: PropTypes.bool,
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['static'])
    ]),
    // if body of modal should be scrollable when content is long
    scrollable: PropTypes.bool,
    // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
    // external: PropTypes.node,
    // called on componentDidMount
    onEnter: PropTypes.func,
    // called on componentWillUnmount
    onExit: PropTypes.func,
    // called when done transitioning in
    onOpened: PropTypes.func,
    // called when done transitioning out
    onClosed: PropTypes.func,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    cssModule: PropTypes.object,
    // zIndex defaults to 1000.
    zIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    innerRef: PropTypes.object,
    // if modal should be destructed/removed from DOM after closing
    unmountOnClose: PropTypes.bool // defaults to true
  }

export default Home;