import React from "react";
import DropDown from "../DropDown.tsx"
import Desktop from "./devices/Desktop.tsx"
import Laptop from "./devices/Laptop.tsx"
import Tablet from "./devices/Tablet.tsx"
import Smartphone from "./devices/Smartphone.tsx"
import NavBar from "../NavBar.tsx"
import { useState } from 'react';
import { useLocation } from "react-router-dom";

const Browse = props => {
    const loc = useLocation();
    const desktopData = loc.state?.desktopData;
    const laptopData = loc.state?.laptopData;
    const [mode, setMode] = useState(!loc.state?.mode ? 'Desktop':loc.state?.mode);
    
    function computeActive(name){
        if(mode==name)
            return "active"
        return ""
    }
    
    function conditionalRendering(){
        if (mode==="Desktop")
            return <Desktop desktopData = {desktopData}/>
        else if (mode=="Laptop")
            return <Laptop laptopData = {laptopData}/>
        else if (mode=="Smartphone")
            return <Smartphone/>
        else
            return <Tablet/>
    }
    return (
        <div>
            <div><NavBar section="Predict"/></div>
            <div className="row">
                <div className="col-3">
                    <div className="nav flex-column nav-pills text-center" aria-orientation="vertical">
                        <button className={"nav-link "+computeActive("Desktop")} onClick={()=>setMode("Desktop")}>Desktop</button>
                        <button className={"nav-link "+computeActive("Laptop")} onClick={()=>setMode("Laptop")}>Laptop</button>
                        <button className={"nav-link "+computeActive("Smartphone")} onClick={()=>setMode("Smartphone")}>Smartphone</button>
                        <button className={"nav-link "+computeActive("Tablet")} onClick={()=>setMode("Tablet")}>Tablet</button>
                    </div>
                </div>
                <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="v-pills-link1"
                    role="tabpanel"
                    aria-labelledby="v-pills-link1-tab"
                >
                {conditionalRendering()}
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Browse;
