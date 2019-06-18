import React from 'react';

function ConfirmClientDetails(props) {
    const { decrement, values, postDataToServer } = props;
    let totalRent = 0;
    for (let index = 0; index < values.income_info.length; index++) {
        let singleRent = values.income_info[index]['rent'];
        let subRent = isNaN(parseInt(singleRent, 10)) ? 0 : parseInt(singleRent, 10);
        totalRent = totalRent + subRent;
    }
    console.log(totalRent);
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <h2>CLIENT DETAILS</h2>
                    <div className="table-responsive">
                        <table className="table table-striped confirm-dtails">
                            <tbody>
                            <tr>
                                <td>
                                    <h3>{ values.clientname }</h3>
                                    <p>Client Name</p>
                                </td>
                                <td>
                                    <h3>{ values.glarea }</h3>
                                    <p>Gross Leaseable Area</p>
                                </td>
                                <td>
                                    <h3>{ values.vacantarea }</h3>
                                    <p>Vacant Area</p>
                                </td>
                                <td>
                                    <h3>{ values.askingrent }</h3>
                                    <p>Asking Rent</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>{ values.propertyaddress }</h3>
                                    <p>Property Address</p>
                                </td>
                                <td>
                                    <h3>{ values.taxaccno }</h3>
                                    <p>Tax Acc. No</p>
                                </td>
                                <td>
                                    <h3>{ values.pgincome }</h3>
                                    <p>Potential Gross Income</p>
                                </td>
                                <td>
                                    <h3>{ values.agincome }</h3>
                                    <p>Actual Gross Income</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <h2>INCOME INFORMATION</h2>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Suite#</th>
                                    <th>Tenant(s)</th>
                                    <th>SqFt.</th>
                                    <th>Rent (USD)</th>
                                    <th>Lease Term(Yrs)</th>
                                    <th>Year <br />Lease Started</th>
                                </tr>
                            </thead>
                            <tbody>
                                {values.income_info.map((info, id) => {
                                    return (
                                        <tr key={id}>
                                            <td>
                                                <h3>{info.suite}</h3>
                                            </td>
                                            <td>
                                                <h3>{info.tenant}</h3>
                                            </td>
                                            <td>
                                                <h3>{info.sqft}</h3>
                                            </td>
                                            <td>
                                                <h3>{info.rent}</h3>
                                            </td>
                                            <td>
                                                <h3>{info.lease}</h3>
                                            </td>
                                            <td>
                                                <h3>{info.year}</h3>
                                            </td>
                                        </tr>
                                    )
                                })}
                                
                                <tr>
                                    <td colSpan="3"><h3>Total Rent</h3></td>
                                    <td><h3>USD {totalRent}</h3></td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
            <div className="row">
                <div className="col-sm-12">
                    <h2>EXPENSES INFORMATION (USD)</h2>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>
                                        <h3>{values.propertytaxes}</h3>
                                        <p>Property Taxes</p>
                                    </td>
                                    <td>
                                        <h3>{values.insurance}</h3>
                                        <p>Insurance</p>
                                    </td>
                                    <td>
                                        <h3>{values.management}</h3>
                                        <p>Management</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.maintenance}</h3>
                                        <p>Maintenance</p>
                                    </td>
                                    <td>
                                        <h3>{values.water}</h3>
                                        <p>Water</p>
                                    </td>
                                    <td>
                                        <h3>{values.repairs}</h3>
                                        <p>Repairs</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.gas}</h3>
                                        <p>Gas</p>
                                    </td>
                                    <td>
                                        <h3>{values.janitoria}</h3>
                                        <p>Janitorial</p>
                                    </td>
                                    <td>
                                        <h3>{values.electric}</h3>
                                        <p>Electric</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.trashremoval}</h3>
                                        <p>Trash Removal</p>
                                    </td>
                                    <td>
                                        <h3>{values.advertising}</h3>
                                        <p>Advertising</p>
                                    </td>
                                    <td>
                                        <h3>{values.legalfees}</h3>
                                        <p>Legal Fees</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.others}</h3>
                                        <p>Others</p>
                                    </td>
                                    <td>
                                        <h3>&nbsp;</h3>
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <h3>&nbsp;</h3>
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h3>Total</h3></td>
                                    <td colspan="2"><h3>USD {values.totalExpenses}</h3></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
            <div className="row">
                <div className="col-sm-12">
                    <h2>TENANT REIMBURSEMENT (USD)</h2>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>
                                        <h3>{values.taxes1}</h3>
                                        <p>Taxes</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.insurance1}</h3>
                                        <p>Insurance</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.electric1}</h3>
                                        <p>Electric</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.repairs1}</h3>
                                        <p>Repairs</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.trashremoval1}</h3>
                                        <p>Trash Removal</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.janitorial1}</h3>
                                        <p>Janitorial</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.maintenance1}</h3>
                                        <p>Maintenance</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>{values.others1}</h3>
                                        <p>Others</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h3>Total: USD {values.totalReimbursement}</h3></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>                   
        
            <div className="row">
                <div className="col-sm-12">
                    <button 
                    className="btn btn-success"
                    onClick={postDataToServer}
                >{values.inProgress ? `Form Is Now Submitted...` : `Submit Your Details`}</button>
                    <button 
                        className="btn btn-default"
                        onClick={decrement}
                    >Back & Edit Details</button>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                {values.mailSent && <div className="alert alert-success"><strong>Success!</strong> Thank You For Filling And Submitting Your Form</div>}
                {values.error && <div class="alert alert-danger"><strong>Error!</strong> Sorry, We Are Experiencing An Error. Please Try Again Later.</div>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ConfirmClientDetails;