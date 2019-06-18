import React from 'react';

function SingleIncomeInfo(props) {
    const {idx, val} = props;
    let suite = `suite-${idx}`, 
        tenant = `tenant-${idx}`, 
        sqft = `sqft-${idx}`,
        rent = `rent-${idx}`,
        lease = `lease-${idx}`,
        year = `year-${idx}`;
    return (
        <tr>
            <td>
                <div className="form-group">
                    <input value={val.suite} type="text"  className="form-control" name={suite} data-id={idx} data-name="suite" />
                </div>
            </td>
            <td>
                <div className="form-group">
                    <input value={val.tenant} type="text" className="form-control" name={tenant} data-id={idx} data-name="tenant" />
                </div>
            </td>
            <td>
                <div className="form-group">
                    <input value={val.sqft} type="text" className="form-control" name={sqft} data-id={idx} data-name="sqft" />
                </div>
            </td>
            <td>
                <div className="form-group">
                    <input value={val.rent} type="text" className="form-control" name={rent} data-id={idx} data-name="rent" />
                </div>
            </td>
            <td>
                <div className="form-group">
                    <input value={val.lease} type="text" className="form-control" name={lease} data-id={idx} data-name="lease" />
                </div>
            </td>
            <td>
                <div className="form-group">
                    <input value={val.year} type="text" className="form-control" name={year} data-id={idx} data-name="year" />
                </div>
            </td>
        </tr>
    )
}

export default SingleIncomeInfo;