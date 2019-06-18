import React from 'react';
import SingleIncomeInfo from './SingleIncomeInfo';

function IncomeInformation(props) {
    const {incomeInfo, increment, decrement, addNewInfo, totalRent} = props;
    return (
        <React.Fragment>
            <h1>INCOME INFORMATION</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Suite#</th>
                        <th>Tenant(s)</th>
                        <th>SqFt.</th>
                        <th>Rent</th>
                        <th>Lease Term</th>
                        <th>Year <br />Lease Started</th>
                    </tr>
                </thead>
                <tbody>
                   { incomeInfo.map((val, idx) => {
                        return <SingleIncomeInfo key={idx} idx={idx} val={val} />
                    })}
                    <tr>
                        <td colSpan="3">Total Rent</td>
                        <td><h4>USD {totalRent}</h4></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            <button 
                type="submit" 
                className="btn btn-success"
                onClick={addNewInfo}
            >Add More Income Information</button>
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

export default IncomeInformation;