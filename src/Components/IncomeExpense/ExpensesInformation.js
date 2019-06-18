import React from 'react';

function ExpensesInformation(props) {
    const {increment, decrement, values} = props;
    return (
        <React.Fragment>
            <h1>EXPENSES INFORMATION</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="propertytaxes">Property Taxes<span className="required">*</span>:</label>
                        <input value={values.propertytaxes} type="text" className="form-control" id="propertytaxes" name="propertytaxes" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="insurance">Insurance<span className="required">*</span>:</label>
                        <input value={values.insurance} type="text" className="form-control" id="insurance" name="insurance" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="management">Management<span className="required">*</span>:</label>
                        <input value={values.management} type="text" className="form-control" id="management" name="management" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="maintenance">Maintenance<span className="required">*</span>:</label>
                        <input value={values.maintenance} type="text" className="form-control" id="maintenance" name="maintenance" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="water">Water<span className="required">*</span>:</label>
                        <input value={values.water} type="text" className="form-control" id="water" name="water" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="repairs">Repairs<span className="required">*</span>:</label>
                        <input value={values.repairs} type="text" className="form-control" id="repairs" name="repairs" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="gas">Gas<span className="required">*</span>:</label>
                        <input value={values.gas} type="text" className="form-control" id="gas" name="gas" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="janitoria">Janitorial<span className="required">*</span>:</label>
                        <input value={values.janitoria} type="text" className="form-control" id="janitoria" name="janitoria" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="electric">Electric<span className="required">*</span>:</label>
                        <input value={values.electric} type="text" className="form-control" id="electric" name="electric" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="trashremoval">Trash Removal<span className="required">*</span>:</label>
                        <input value={values.trashremoval} type="text" className="form-control" id="trashremoval" name="trashremoval" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="advertising">Advertising<span className="required">*</span>:</label>
                        <input value={values.advertising} type="text" className="form-control" id="advertising" name="advertising" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="legalfees">Legal Fees<span className="required">*</span>:</label>
                        <input value={values.legalfees} type="text" className="form-control" id="legalfees" name="legalfees" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="others">Others<span className="required">*</span>:</label>
                        <input value={values.others} type="text" className="form-control" id="others" name="others" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <h4>Total Fees: USD {values.totalExpenses}</h4>
                    </div>
                </div>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={increment}
            >Continue</button>
            <button 
                type="submit" 
                className="btn btn-default"
                onClick={decrement}
            >Back</button>
        </React.Fragment>
    )
}

export default ExpensesInformation;