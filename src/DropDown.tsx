import React, { useState } from 'react';


function DropDown({ items, setItem, varValue, dropDownName }){
    const [clicked, setClicked] = useState(false);
    
    function computeShow(clicked){
        if (clicked)
            return "show"
        else
            return ""
    }
    
    return (
        <div className="dropdown">
            <button className={"btn btn-secondary dropdown-toggle "+ computeShow(clicked)} onClick= {() => setClicked(!clicked)} type="button" data-bs-toggle="dropdown" aria-expanded={clicked}>
                {!varValue.name ? dropDownName : varValue.name}
            </button>
            <ul className={"dropdown-menu " +computeShow(clicked)}>
                {items.map((name,index) => (<li key={name}><a className="dropdown-item" onClick={() => {setItem({name});setClicked(!clicked)}} href="#">{name}</a></li>))}
            </ul>
        </div>
    );
}

export default DropDown
