import React, { useState } from 'react';
import DropDown from "../../DropDown.tsx"
import NumberBox from "../../NumberBox.tsx"

function ShowPrice({data}) {
    function computeText(){
        if (!data.MinPrice){
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Not price yet</h5>
                        <p className="card-text">Click the predict button after writing data for the device to get a prediction</p>
                        <a href="/upload" className="card-link">Predict a device by uploading</a>
                        <a href="/predict" className="card-link">Predict another device</a>
                    </div>
                </div>
            )
        }
        else
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Price of the device</h5>
                        <p className="card-text">The price of the device is between {Math.round(data.MinPrice)}€ and {Math.round(data.MaxPrice)}€</p>
                        <p className="card-text">The confidence level on this prediction is {Math.round(data.Confidence)}%</p>
                        <a href="/upload" className="card-link">Predict another device by uploading</a>
                        <a href="/predict" className="card-link">Predict another device</a>
                    </div>
                </div>
            )
    }
    
    
    return (
        <div>
            {computeText()}
        </div>
    );
}


export default ShowPrice;
