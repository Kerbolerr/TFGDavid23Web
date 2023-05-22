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
        </div>
    );
}

export default MainPage;
