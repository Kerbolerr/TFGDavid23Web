import React, { useState } from 'react';
import DropDown from "../../DropDown.tsx"
import NumberBox from "../../NumberBox.tsx"
import ShowPrice from "./ShowPrice.tsx"

function Smartphone(){
    const [clicked, setClicked] = useState(false);
    const [storage, setStorage] = useState('');
    const [RAM, setRAM] = useState('');
    const [screenSize, setScreenSize] = useState('');
    const [resolution, setResolution] = useState('');
    const [megapixels, setMegapixels] = useState('');
    const [bandwith, setBandwith] = useState('');
    const [year, setYear] = useState('');
    const [brand, setBrand] = useState('');
    const [data, setData] = useState('');
    
    const bandwiths = ['4G','5G'];
    const brands = ['Xiaomi','Sony','Redmi','iPhone','Huawei','Google','Galaxy','Other'];
    
    function computePrice(){
        if (storage.toString() && RAM.toString() && brand.name&& screenSize.toString()&&
            resolution.toString() && megapixels.toString() &&year.toString() && bandwith.toString()){
            let url = "http://0.0.0.0:8000/smartphone/?storage="+storage.toString()+
                "&ram="+RAM.toString()+"&yearOfLaunch="+year.toString()+"&model="+brand.name.replace(' ','%20')
                +"&screenSize="+screenSize.toString()+"&resolution="+resolution.toString()+"&megapixels="+megapixels.toString()+"&bandwith="+(bandwith.name==="5G"? "1" : "0")
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
                        <NumberBox nameBox="Storage (GB)" default="0" setValue={setStorage}></NumberBox>
                    </div>
                    <div className="p-2">
                        <NumberBox nameBox="RAM (GB)" default="0" setValue={setRAM}></NumberBox>
                    </div>
                    <div className="p-2">
                        <NumberBox nameBox="Megapixels" default="0" setValue={setMegapixels}></NumberBox>
                    </div>
                </div>
                <div className="p-2">
                    <div className="p-2">
                        <div className="form-group">
                            Smartphone brand
                            <DropDown items = {brands} setItem = {setBrand} varValue={brand} dropDownName="Smartphone brand"></DropDown>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="form-group">
                            Bandwith
                            <DropDown items = {bandwiths} setItem = {setBandwith} varValue={bandwith} dropDownName="Bandwith"></DropDown>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="p-2">
                            <NumberBox nameBox="Year the smartphone was bought" default="2020" setValue={setYear}></NumberBox>
                    </div>
                    <div className="p-2">
                            <NumberBox nameBox="Screen Size (inches)" default="0" setValue={setScreenSize}></NumberBox>
                    </div>
                    <div className="p-2">
                            <NumberBox nameBox="Resolution (maximum, píxels)" default="0" setValue={setResolution}></NumberBox>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="p-2">
                    <div>
                        Get price
                    <div/>
                    <button type="submit" className="btn btn-primary" onClick={computePrice}>Get price</button>
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

export default Smartphone
