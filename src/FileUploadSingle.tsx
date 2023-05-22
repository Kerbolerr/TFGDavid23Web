import { ChangeEvent, useState } from 'react';
import { Link } from "react-router-dom";

const FileUploadSingle = props => {
  const [file, setFile] = useState<File>();
  const [text, setText] = useState('');
  const [stateMode, setStateMode] = useState('');
  
  const [stateDesktop, setStateDesktop] = useState({
    desktopCpu: "",
    desktopRamSize: "",
    desktopHardDrive: "",
    desktopSddDrive: "",
    desktopGrapics: "",
    desktopManufacturer: ""
  });
  
  const [stateLaptop, setStateLaptop] = useState({
    laptopCpu: "",
    laptopRamSize: "",
    laptopHardDrive: "",
    laptopSddDrive: "",
    laptopGrapics: "",
    laptopCpu: "",
    laptopManufacturer: "",
    laptopInches: "",
    laptopResolution: "",
    laptopDisplay:""
  });
  
  function computeText(){
    console.log(stateMode)
    if (stateMode==='Desktop'){
        return (
            <div className="card" style={{width: "40rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Data gathered from the device report</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Hard Drive: {stateDesktop.desktopHardDrive} GB</li>
                    <li className="list-group-item">SDD Drive: {stateDesktop.desktopSddDrive} GB</li>
                    <li className="list-group-item">CPU: {stateDesktop.desktopCpu}</li>
                    <li className="list-group-item">RAM: {stateDesktop.desktopRamSize} GB</li>
                    <li className="list-group-item">Graphics: {stateDesktop.desktopGrapics}</li>
                    <li className="list-group-item">Manufacturer: {stateDesktop.desktopManufacturer}</li>
                </ul>
            </div>
        )
    }
    else if (stateMode==='Laptop'){
        return (
            <div className="card" style={{width: "40rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Data gathered from the device report</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Hard Drive: {stateLaptop.laptopHardDrive} GB</li>
                    <li className="list-group-item">SDD Drive: {stateLaptop.laptopSddDrive} GB</li>
                    <li className="list-group-item">CPU: {stateLaptop.laptopCpu}</li>
                    <li className="list-group-item">RAM: {stateLaptop.laptopRamSize} GB</li>
                    <li className="list-group-item">Graphics: {stateLaptop.laptopGrapics}</li>
                    <li className="list-group-item">Manufacturer: {stateLaptop.laptopManufacturer}</li>
                    <li className="list-group-item">Screen Inches: {stateLaptop.laptopInches}'</li>
                    <li className="list-group-item">Screen resolution: {stateLaptop.laptopDisplay}</li>
                </ul>
            </div>
        )
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      e.target.files[0].text().then(
          (value)=>{
            setText(value)
            let ramSize = 0
            let cpu = ""
            let hardDrive = 0
            let sddDrive = 0
            let graphics = ""
            let inches = 0
            let resolution = 0
            let display = ""
            let components = JSON.parse(value).components
            for (let i = 0; i < components.length; i++) {
                if (components[i].type ==="RamModule")
                    ramSize+=components[i].size
                else if(components[i].type==="Processor")
                    cpu = components[i].model
                else if(components[i].type === "HardDrive")
                    hardDrive += components[i].size
                else if(components[i].type === "SolidStateDrive")
                    sddDrive += components[i].size
                else if(components[i].type === "GraphicCard")
                    graphics = components[i].model
                else if(components[i].type === "Display"){
                    inches = components[i].size
                    resolution = Math.max(components[i].resolutionHeight,components[i].resolutionWidth)
                    display = components[i].resolutionHeight.toString()+" x "+components[i].resolutionWidth.toString()
                }
            }
            if (JSON.parse(value).device.type === "Desktop"){
                setStateDesktop(prevState => ({
                    ...prevState,
                    desktopCpu: cpu,
                    desktopRamSize:Math.round(ramSize/1000),
                    desktopHardDrive:Math.round(hardDrive/1000),
                    desktopSddDrive:Math.round(sddDrive/1000),
                    desktopGrapics: graphics,
                    desktopCpu: cpu,
                    desktopManufacturer: JSON.parse(value).device.manufacturer
                }));
                setStateMode("Desktop")
            }
            else{
                setStateLaptop(prevState => ({
                    ...prevState,
                    laptopCpu: cpu,
                    laptopRamSize:Math.round(ramSize/1000),
                    laptopHardDrive:Math.round(hardDrive/1000),
                    laptopSddDrive:Math.round(sddDrive/1000),
                    laptopGrapics: graphics,
                    laptopCpu: cpu,
                    laptopManufacturer:JSON.parse(value).device.manufacturer,
                    laptopInches: Math.round(inches),
                    laptopResolution: Math.round(resolution),
                    laptopDisplay:display
                }));
                setStateMode("Laptop")
            }
            console.log(stateDesktop)
            console.log(stateLaptop)
        }
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Link to="/predict" state={{ desktopData: stateDesktop, laptopData:stateLaptop, mode:stateMode }} className="link">Predict</Link>
      {computeText()}
    </div>
  );
}

export default FileUploadSingle;
