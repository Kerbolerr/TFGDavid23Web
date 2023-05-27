import DropDown from "../DropDown.tsx"
import Desktop from "../Desktop.tsx"
import NavBar from "../NavBar.tsx"
import { useState } from 'react';

function MainPage() {
    const [mode, chooseMode] = useState('');
    
    return (
        <div>
            <base href="https://mupknf4d32.us-east-1.awsapprunner.com/" />
            <div><NavBar section="Home"/></div>
            <div className="card">
                <div style={{
                    textAlign: 'center',
                    margin: "40 40 40 auto",}}
                    className="card-body"
                >
                <p>This web application is a frontend for using a price prediction tool for second-hand market devices.</p>
                <p>Source code for executing this frontend and the price prediction tool can be respectively found at:</p>
                <p><a href={"https://github.com/Kerbolerr/TFGDavid23Web"}>Frontend</a></p>
                <p><a href={"https://github.com/Kerbolerr/TFGDavid23Model"}>Price prediction tool</a></p>
                </div>
            </div>
            <div className="card">
                <div style={{
                    textAlign: 'center',
                    margin: "40 40 40 auto",}} 
                    className="card-body"
                >
                <p>The application consists of a frontend for using the price prediction tool.</p>
                <p>The frontend allows to make predictions for desktop, laptops, smartphones and tablets.</p>
                <p>It also allows to read device reports generated with e-reuse tools (i.e. Workbench).</p>
                <p><a href={"https://github.com/eReuse/devicehub-teal/blob/master/ereuse_devicehub/dummy/files/"}>Example files to automatically predict devices.</a></p>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
