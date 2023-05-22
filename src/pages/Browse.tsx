import DropDown from "../DropDown.tsx"
import DesktopDevices from "./browsing/DesktopDevices.tsx"
import NavBar from "../NavBar.tsx"
import { useState, useEffect } from "react";

function Browse() {
    const [mode, setMode] = useState('Desktop');
    const [data, setData] = useState('');
    
    const [stateDesktop, setStateDesktop] = useState({
        name: "string",
        description: "string",
        minPrice: 0,
        maxPrice: 0,
        hddCapacity: 0,
        sddCapacity: 0,
        RAM: 0,
        brand: "string",
        graphics: "string",
        cpu: "string",
        yearBought: 0
    });
    
    const [allDesktop, setAllDesktop] = useState([]);
    
    function computeActive(name){
        if(mode==name)
            return "active"
        return ""
    }
    
    function getAllDevices(typeOfDevice){
        if(typeOfDevice=="Desktop"){
            let url = "http://0.0.0.0:8000/devices/desktop/get?start=0&howMany=20"
            fetch(url)
            .then((response) => response.json())
                .then((data) => {
                    setData(data)
                    let retrieveDesktops = []
                    for (let i = 0; i < 3; i++) {
                        setStateDesktop(prevState => ({
                            ...prevState,
                            name: data.devices[i].name,
                            description: data.devices[i].description,
                            minPrice: data.devices[i].minPrice,
                            maxPrice: data.devices[i].maxPrice,
                            hddCapacity: data.devices[i].hddCapacity,
                            sddCapacity: data.devices[i].sddCapacity,
                            RAM: data.devices[i].RAM,
                            brand: data.devices[i].brand,
                            graphics: data.devices[i].graphics,
                            cpu: data.devices[i].cpu,
                            yearBought: data.devices[i].yearBought
                        }));
                        retrieveDesktops.push(stateDesktop)
                }
                setAllDesktop(retrieveDesktops)
            });
        }
    }
    
    useEffect(() => {
        getAllDevices("Desktop");
    }, []);
    
    return (
        <div>
            <div><NavBar section="Browse"/></div>
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
                {mode=="Desktop"? allDesktop.map((object, i) => <DesktopDevices desktopData={object} key = {i} />):""}
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Browse;
