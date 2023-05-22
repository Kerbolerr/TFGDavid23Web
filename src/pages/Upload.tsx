import DropDown from "../DropDown.tsx"
import Desktop from "../Desktop.tsx"
import NavBar from "../NavBar.tsx"
import FileUploadSingle from "../FileUploadSingle.tsx"
import { useState } from 'react';

function Upload() {
    const [mode, chooseMode] = useState('');
    return (
        <div>
            <div><NavBar section="Upload"/></div>
            <FileUploadSingle/>
        </div>
    );
}

export default Upload;
