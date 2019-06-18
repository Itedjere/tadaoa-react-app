import React from 'react';

function PersonalDetails(props) {
    const {increment, values} = props;
    return (
        <React.Fragment>
            <h1>PERSONAL DETAILS</h1>
            <div className="row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="clientname">Client Name<span className="required">*</span>:</label>
                        <input value={values.clientname} type="text" className="form-control" id="clientname" name="clientname" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="glarea">Gross Leasable Area<span className="required">*</span>:</label>
                        <input value={values.glarea} type="text" className="form-control" id="glarea" name="glarea" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="vacantarea">Vacant Area<span className="required">*</span>:</label>
                        <input value={values.vacantarea} type="text" className="form-control" id="vacantarea" name="vacantarea" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="askingrent">Asking Rent<span className="required">*</span>:</label>
                        <input value={values.askingrent} type="text" className="form-control" id="askingrent" name="askingrent" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="propertyaddress">Property Address<span className="required">*</span>:</label>
                        <input value={values.propertyaddress} type="text" className="form-control" id="propertyaddress" name="propertyaddress" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="taxaccno">Tax Acc No<span className="required">*</span>:</label>
                        <input value={values.taxaccno} type="text" className="form-control" id="taxaccno" name="taxaccno" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="pgincome">Potential Gross Income<span className="required">*</span>:</label>
                        <input value={values.pgincome} type="text" className="form-control" id="pgincome" name="pgincome" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="agincome">Actual Gross Income<span className="required">*</span>:</label>
                        <input value={values.agincome} type="text" className="form-control" id="agincome" name="agincome" />
                    </div>
                </div>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={increment}
            >Continue</button>
        </React.Fragment>
    );
}

export default PersonalDetails;