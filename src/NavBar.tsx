import React, { useState } from 'react';


function NavBar({section}){
    
    function computeSection(name){
        if(name===section){
            return {backgroundColor:"#09a320"}
        }
        else
            return {}
    }
    
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Device Market</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" style={computeSection("Browse")} href="/browse">Browse</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={computeSection("Upload")} href="/upload">Upload</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={computeSection("Predict")} href="/predict">Predict</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar
