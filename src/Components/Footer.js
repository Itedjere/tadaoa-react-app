import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const dateObj = new Date();
    const dateYear = dateObj.getFullYear();
    return (
        <div className="copy-rights">
            <div className="container">
                <div className="copy-right-main">
                    <p>Copyright © <span id="date">{dateYear}</span> <Link to="/" target="_blank">  O’DAY HARRISON GRANT </Link>. All rights reserved.</p>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;