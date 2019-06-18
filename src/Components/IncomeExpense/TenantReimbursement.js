import React from 'react';

function TenantReimbursement(props) {
    const {values, increment, decrement} = props;
    return (
        <React.Fragment>
            <h3>TENANT REIMBURSEMENT <small>If applies</small></h3>
            <div className="row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="taxes1">Taxes<span className="required">*</span>:</label>
                        <input value={values.taxes1} type="text" className="form-control" id="taxes1" name="taxes1" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="insurance1">Insurance<span className="required">*</span>:</label>
                        <input value={values.insurance1} type="text" className="form-control" id="insurance1" name="insurance1" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="electric1">Electric<span className="required">*</span>:</label>
                        <input value={values.electric1} type="text" className="form-control" id="electric1" name="electric1" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="repairs1">Repairs<span className="required">*</span>:</label>
                        <input value={values.repairs1} type="text" className="form-control" id="repairs1" name="repairs1" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="trashremoval1">Trash Removal<span className="required">*</span>:</label>
                        <input value={values.trashremoval1} type="text" className="form-control" id="trashremoval1" name="trashremoval1" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="janitorial1">Janitorial<span className="required">*</span>:</label>
                        <input value={values.janitorial1} type="text" className="form-control" id="janitorial1" name="janitorial1" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="maintenance1">Maintenance<span className="required">*</span>:</label>
                        <input value={values.maintenance1} type="text" className="form-control" id="maintenance1" name="maintenance1" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="others1">Others<span className="required">*</span>:</label>
                        <input value={values.others1} type="text" className="form-control" id="others1" name="others1" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <h4>Total Fees: USD {values.totalReimbursement}</h4>
                    </div>
                </div>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={increment}
            >Affirm Correct Details</button>
            <button 
                type="submit" 
                className="btn btn-default"
                onClick={decrement}
            >Back</button>
        </React.Fragment>
    )
}

export default TenantReimbursement;