import React, { useState } from 'react';


function NumberBox({nameBox, defaultValue, setValue}){
    const [clicked, setClicked] = useState(false);
    
    
    return (
            <div className="form-outline">
                <div>{nameBox}</div>
                <input value={defaultValue} onChange = {(event)=>setValue(event.target.value)} type="number" id="typeNumber" className="form-control" />
            </div>
    );
}

export default NumberBox
