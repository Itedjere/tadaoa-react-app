import React, { Component } from 'react';
import Navigation from './Navigation';
import PersonalDetails from './IncomeExpense/PersonalDetails';
import IncomeInformation from './IncomeExpense/IncomeInformation';
import ExpensesInformation from './IncomeExpense/ExpensesInformation';
import TenantReimbursement from './IncomeExpense/TenantReimbursement';
import ConfirmClientDetails from './IncomeExpense/ConfirmClientDetails';



class IncomeExpense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appurl: 'http://tadaoa.com/api/sign_document/index.php',
            email: 'support@tadaoa.com',
            clientname: '',
            glarea: '',
            vacantarea: '',
            askingrent: '',
            propertyaddress: '',
            taxaccno: '',
            pgincome: '',
            agincome: '',
            income_info: [
                {
                    suite: '', 
                    tenant: '', 
                    sqft: '', 
                    rent: '', 
                    lease: '', 
                    year: ''
                }
            ],
            propertytaxes: '',
            insurance: '',
            management: '',
            maintenance: '',
            water: '',
            repairs: '',
            gas: '',
            janitoria: '',
            electric: '',
            trashremoval: '',
            advertising: '',
            legalfees: '',
            others: '',
            taxes1: '',
            insurance1: '',
            electric1: '',
            repairs1: '',
            trashremoval1: '',
            janitorial1: '',
            maintenance1: '',
            others1: '',
            step: 1,
            totalReimbursement: 0,
            totalExpenses: 0,
            mailSent: false,
            error: null,
            inProgress: false
        };
    }


    componentDidUpdate(prevProps, prevState) {
        //console.log(this.initTotalRent);
        //calculate total reimbursement
        if (this.state.taxes1 !== prevState.taxes1 || this.state.insurance1 !== prevState.insurance1 || 
            this.state.electric1 !== prevState.electric1 || this.state.repairs1 !== prevState.repairs1 || 
            this.state.trashremoval1 !== prevState.trashremoval1 || this.state.janitorial1 !== prevState.janitorial1 || 
            this.state.maintenance1 !== prevState.maintenance1 || this.state.others1 !== prevState.others1) {
                const taxes1 = isNaN(parseInt(this.state.taxes1, 10)) ? 0 : parseInt(this.state.taxes1, 10);
                const insurance1 = isNaN(parseInt(this.state.insurance1, 10)) ? 0 : parseInt(this.state.insurance1, 10);
                const electric1 = isNaN(parseInt(this.state.electric1, 10)) ? 0 : parseInt(this.state.electric1, 10);
                const repairs1 = isNaN(parseInt(this.state.repairs1, 10)) ? 0 : parseInt(this.state.repairs1, 10);
                const trashremoval1 = isNaN(parseInt(this.state.trashremoval1, 10)) ? 0 : parseInt(this.state.trashremoval1, 10);
                const janitorial1 = isNaN(parseInt(this.state.janitorial1, 10)) ? 0 : parseInt(this.state.janitorial1, 10);
                const maintenance1 = isNaN(parseInt(this.state.maintenance1, 10)) ? 0 : parseInt(this.state.maintenance1, 10);
                const others1 = isNaN(parseInt(this.state.others1, 10)) ? 0 : parseInt(this.state.others1, 10);
                this.setState({ totalReimbursement : taxes1 + insurance1 + electric1 + repairs1 + trashremoval1 + janitorial1 + maintenance1 + others1 });
        }

        //calculate total expenses information
        if (this.state.propertytaxes !== prevState.propertytaxes ||
            this.state.insurance !== prevState.insurance || 
            this.state.management !== prevState.management || 
            this.state.maintenance !== prevState.maintenance || 
            this.state.water !== prevState.water || 
            this.state.repairs !== prevState.repairs || 
            this.state.gas !== prevState.gas || 
            this.state.janitoria !== prevState.janitoria || 
            this.state.electric !== prevState.electric || 
            this.state.trashremoval !== prevState.trashremoval || 
            this.state.advertising !== prevState.advertising || 
            this.state.others !== prevState.others || 
            this.state.legalfees !== prevState.legalfees) {
                const propertytaxes = isNaN(parseInt(this.state.propertytaxes, 10)) ? 0 : parseInt(this.state.propertytaxes, 10);
                const insurance = isNaN(parseInt(this.state.insurance, 10)) ? 0 : parseInt(this.state.insurance, 10);
                const management = isNaN(parseInt(this.state.management, 10)) ? 0 : parseInt(this.state.management, 10);
                const maintenance = isNaN(parseInt(this.state.maintenance, 10)) ? 0 : parseInt(this.state.maintenance, 10);
                const water = isNaN(parseInt(this.state.water, 10)) ? 0 : parseInt(this.state.water, 10);
                const repairs = isNaN(parseInt(this.state.repairs, 10)) ? 0 : parseInt(this.state.repairs, 10);
                const gas = isNaN(parseInt(this.state.gas, 10)) ? 0 : parseInt(this.state.gas, 10);
                const janitorial = isNaN(parseInt(this.state.janitoria, 10)) ? 0 : parseInt(this.state.janitoria, 10);
                const electric = isNaN(parseInt(this.state.electric, 10)) ? 0 : parseInt(this.state.electric, 10);
                const trashremoval = isNaN(parseInt(this.state.trashremoval, 10)) ? 0 : parseInt(this.state.trashremoval, 10);
                const others = isNaN(parseInt(this.state.others, 10)) ? 0 : parseInt(this.state.others, 10);
                const advertising = isNaN(parseInt(this.state.advertising, 10)) ? 0 : parseInt(this.state.advertising, 10);
                const legalfees = isNaN(parseInt(this.state.legalfees, 10)) ? 0 : parseInt(this.state.legalfees, 10);
                this.setState({ totalExpenses : propertytaxes + insurance + management + maintenance + water + repairs + gas + janitorial + electric + trashremoval + others + advertising + legalfees });
                
        }
        
    }

    handleChange = (e) => {
        if (["suite", "tenant", "sqft", "rent", "lease", "year"].includes(e.target.dataset.name) ) {
            let incomeInfo = [...this.state.income_info]
            incomeInfo[e.target.dataset.id][e.target.dataset.name] = e.target.value
            this.setState({ income_Info: incomeInfo }, () => {})

        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }


    addNewInfo = (e) => {
        this.setState((prevState) => ({
            income_info: [...prevState.income_info, {
                    suite: '', 
                    tenant:'', 
                    sqft: '', 
                    rent: '', 
                    lease: '', 
                    year: ''
                }],
        }));
    }


    increment = (e) => {
        this.setState(prev => ({
            step : prev.step + 1
        }))
    }


    decrement = (e) => {
        this.setState(prev => ({
            step : prev.step - 1
        }))
    }

    handleSubmit = (e) => { e.preventDefault() }


    postDataToServer = (e) => {
        //call your api script here
        e.preventDefault();
        this.setState({ inProgress: true });
        axios({
            method: "post",
            url: this.state.appurl,
            headers: { "content-type": "application/json" },
            data: this.state
        })
        .then(result => {
            if (result.data.sent) {
                this.setState({
                    mailSent: result.data.sent
                });
                this.setState({ error: false, inProgress: false });
            } else {
                this.setState({ error: true, inProgress: false });
            }
        })
        .catch(error => this.setState({ error: error.message, inProgress: false }));
    }
    
    render() {
        const { step, income_info, totalRent } = this.state;
        let displayedForm;

        switch (step) {
            case 1:
                displayedForm = <PersonalDetails 
                                    increment={this.increment}
                                    values={this.state}
                                />;
                break;
            case 2:
                displayedForm = <IncomeInformation 
                                    incomeInfo={income_info} 
                                    increment={this.increment}
                                    decrement={this.decrement}
                                    addNewInfo={this.addNewInfo}
                                    totalRent={totalRent}
                                />;
                break;
            case 3:
                displayedForm = <ExpensesInformation 
                                    increment={this.increment}
                                    decrement={this.decrement}
                                    values={this.state}
                                />;
                break;
            case 4:
                displayedForm = <TenantReimbursement 
                                    increment={this.increment}
                                    decrement={this.decrement}
                                    values={this.state}
                                />;
                break;
            case 5:
                displayedForm = <ConfirmClientDetails
                                    decrement={this.decrement}
                                    postDataToServer={this.postDataToServer}
                                    values={this.state}
                                />;
                break;
        }
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
                    <div className="container" id="mycontainer">
                        <form role="form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                            { displayedForm }
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default IncomeExpense;