import React, { useState } from 'react';
import DropDown from "../../DropDown.tsx"
import NumberBox from "../../NumberBox.tsx"

function Desktop({desktopData}){
    const [name, setName] = useState(desktopData==null ? '' : desktopData.name);
    const [description, setDescription] = useState(desktopData==null ? '' : desktopData.description);
    const [minPrice, setMinPrice] = useState(desktopData==null ? '' : desktopData.minPrice);
    const [maxPrice, setMaxPrice] = useState(desktopData==null ? '' : desktopData.maxPrice);
    const [hddStorage, setHDDStorage] = useState(desktopData==null ? '' : desktopData.hddCapacity);
    const [sddStorage, setSDDStorage] = useState(desktopData==null ? '' : desktopData.sddCapacity);
    const [RAM, setRAM] = useState(desktopData==null ? '' : desktopData.RAM);
    const [year, setYear] = useState(desktopData==null ? '' : desktopData.yearBought);
    const [brand, setBrand] = useState(desktopData==null ? '' : desktopData.brand);
    const [graphics, setGraphics] = useState(desktopData==null ? '' : desktopData.graphics);
    const [cpu, setCPU] = useState(desktopData==null ? '' : desktopData.cpu);

        
    return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Description: {description}</p>
                        <p className="card-text">HddStorage: {hddStorage}</p>
                        <p className="card-text">SddStorage: {sddStorage}</p>
                        <p className="card-text">RAM: {RAM}</p>
                        <p className="card-text">Brand: {brand}</p>
                        <p className="card-text">Graphics: {graphics}</p>
                        <p className="card-text">CPU: {cpu}</p>
                        <p className="card-text">Year Bought: {year}</p>
                        <p className="card-text">Price gap: {minPrice}€ {maxPrice}€</p>
                    </div>
                </div>
    );
}

export default Desktop
