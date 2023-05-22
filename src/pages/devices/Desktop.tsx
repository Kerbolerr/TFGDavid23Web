import React, { useState } from 'react';
import DropDown from "../../DropDown.tsx"
import NumberBox from "../../NumberBox.tsx"
import ShowPrice from "./ShowPrice.tsx"

function Desktop({desktopData}){
    const [clicked, setClicked] = useState(false);
    const [hddStorage, setHDDStorage] = useState(desktopData==null ? '' : desktopData.desktopHardDrive);
    const [sddStorage, setSDDStorage] = useState(desktopData==null ? '' : desktopData.desktopSddDrive);
    const [RAM, setRAM] = useState(desktopData==null ? '' : desktopData.desktopRamSize);
    const [year, setYear] = useState('');
    const [brand, setBrand] = useState(desktopData==null ? '' : desktopData.desktopManufacturer);
    const [graphics, setGraphics] = useState('');
    const [cpu, setCPU] = useState('');
    const [data, setData] = useState('');
    
    const storages = ['128','256','512','1024','2048'];
    const rams = ['2','4','8','16','32','64'];
    const brands = ['DELL','Lenovo','HP','Fujitsu','Mars','Acer','Other'];
    const graphicsBrands = ['Intel','Nvidia','AMD'];
    const cpus = ['AMD','Xeon','Pentium','Core i3','Core i5','Core i7','Other'];
    
    function computePrice(){
        console.log(hddStorage)
        if (hddStorage.toString() && sddStorage.toString() && RAM.toString() && brand.name &&graphics.name&&cpu.name&&year.toString()){
            let url = "https://2cb9eb2pvq.us-east-1.awsapprunner.com/desktop/?hddStorage="+hddStorage.toString()+
                "&sddStorage="+sddStorage.toString()+"&ram="+RAM.toString()+"&yearOfLaunch="+year.toString()+"&brand="+brand.name
                +"&graphicsModel="+graphics.name+"&cpuModel="+cpu.name.replace(' ','%20')
            fetch(url)
            .then((response) => response.json())
                .then((data) => {
                    setData(data)
                });
        }
        else{
            setData("")
        }
    }
        
    return (
        <form>
            <div className="d-flex flex-row">
                <div className="p-2">
                    <div className="p-2">
                        <NumberBox nameBox="HDD Capacity (GB)" defaultValue={hddStorage} setValue={setHDDStorage}></NumberBox>
                    </div>
                    <div className="p-2">
                        <NumberBox nameBox="SDD Capacity (GB)" defaultValue={sddStorage} setValue={setSDDStorage}></NumberBox>
                    </div>
                    <div className="p-2">
                        <NumberBox nameBox="RAM (GB)" default="0" defaultValue={RAM} setValue={setRAM}></NumberBox>
                    </div>
                </div>
                <div className="p-2">
                    <div className="p-2">
                        <div className="form-group">
                            Computer brand
                            <DropDown items = {brands} setItem = {setBrand} varValue={brand} dropDownName="Computer brand"></DropDown>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="form-group">
                            Graphics card model
                            <DropDown items = {graphicsBrands} setItem = {setGraphics} varValue={graphics} dropDownName="Graphics card model"></DropDown>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="form-group">
                            CPU model
                            <DropDown items = {cpus} setItem = {setCPU} varValue={cpu} dropDownName="CPU model"></DropDown>
                        </div>
                    </div>
                </div>
            
                <div className="p-2">
                    <div>
                        <NumberBox nameBox="Year the computer was bought" defaultValue={year} setValue={setYear}></NumberBox>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="p-2">
                    <div>
                        Get price
                    <div/>
                    <button type="button" className="btn btn-primary" onClick={computePrice}>Get price</button>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="p-2">
                    <div>
                        <ShowPrice data={data}/>
                    <div/>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Desktop
