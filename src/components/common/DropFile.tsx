
import React, { useState } from 'react';
import { FilePond } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';


const DropFile= () => {
    //const [files, setFiles] = useState<FilePondFile[]>([]);
	const [files, setFiles] = useState([])

    return (
        <section className="w-100">
            <div>
                <FilePond
                    files={files}
                    // onupdatefiles={(fileItems) => {
                    //     // Set currently active file objects to state
                    //     setFiles(fileItems.map(fileItem => fileItem.file));
                    // }}
                    allowMultiple={true}
                    maxFiles={5}
                    name="files"
                    className="filepond filepond-input-multiple"
                    labelIdle='<i className="bi bi-upload-cloud-fill"></i> Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
                <p>The file size should not be more than 3MB</p>
            </div>
        </section>
    );
};

export default DropFile;
