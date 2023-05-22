import React, { useState } from 'react';
import DropDown from "../../DropDown.tsx"
import NumberBox from "../../NumberBox.tsx"
import ShowPrice from "./ShowPrice.tsx"

function Laptop({laptopData}){
    const [clicked, setClicked] = useState(false);
    const [hddStorage, setHDDStorage] = useState(laptopData==null ? '' : laptopData.laptopHardDrive);
    const [sddStorage, setSDDStorage] = useState(laptopData==null ? '' : laptopData.laptopSddDrive);
    const [RAM, setRAM] = useState(laptopData==null ? '' : laptopData.laptopRamSize);
    const [screenSize, setScreenSize] = useState(laptopData==null ? '' : laptopData.laptopInches);
    const [resolution, setResolution] = useState(laptopData==null ? '' : laptopData.laptopResolution);
    const [year, setYear] = useState('');
    const [brand, setBrand] = useState('');
    const [graphics, setGraphics] = useState('');
    const [cpu, setCPU] = useState('');
    const [data, setData] = useState('');
    
    const storages = ['128','256','512','1024','2048'];
    const rams = ['2','4','8','16','32','64'];
    const brands = ['Thinkpad','Probook','Elitebook','Latitude','Lifebook','Autre','Other'];
    const graphicsBrands = ['Intel','Nvidia','AMD'];
    const cpus = ['AMD','Xeon','Pentium','Core i3','Core i5','Core i7','Other'];
    
    function computePrice(){
        if (hddStorage.toString() && sddStorage.toString() && RAM.toString() && brand.name
            &&graphics.name&&cpu.name&&year.toString()&&screenSize.toString()&&resolution.toString()){
            let url = "https://2cb9eb2pvq.us-east-1.awsapprunner.com/laptop/?hddStorage="+hddStorage.toString()+
                "&screenSize="+screenSize.toString()+"&resolution="+resolution.toString()+
                "&sddStorage="+sddStorage.toString()+"&ram="+RAM.toString()+"&yearOfLaunch="+year.toString()+"&brand="+brand.name
                +"&graphicsModel="+graphics.name+"&cpuModel="+cpu.name.replace(' ','%20')
            console.log(url)
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
                        <NumberBox nameBox="RAM (GB)" defaultValue={RAM} setValue={setRAM}></NumberBox>
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
                    <div className="p-2">
                        <div>
                            <NumberBox nameBox="Year the laptop was bought" default="2020" setValue={setYear}></NumberBox>
                        </div>
                    </div>
                    <div className="p-2">
                            <NumberBox nameBox="Screen Size (inches)" defaultValue={screenSize} setValue={setScreenSize}></NumberBox>
                    </div>
                    <div className="p-2">
                            <NumberBox nameBox="Resolution (maximum, píxels)" defaultValue={resolution} setValue={setResolution}></NumberBox>
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

export default Laptop
