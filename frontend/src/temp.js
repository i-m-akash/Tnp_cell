import React, { useState } from 'react';
import './Home.css'; // Import CSS file for styling

const Home = () => {

    return (
        <div className="col-md-4">
            <h2 className="text-uppercase font-weight-600 mt-0 mt-sm-0 title">
                <span className="text-theme-colored2">Announcements </span>
                <i className="fa fa-calendar-plus-o"></i>
            </h2>
            <div className="double-line-bottom-theme-colored-2"></div>
            <div id="newsticker-demo" >
                <ul className="ar-link">
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>sir3</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
