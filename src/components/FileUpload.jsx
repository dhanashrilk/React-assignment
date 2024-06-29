import React, { useState } from "react";
import "./FileUpload.css";
import { LuFileSymlink } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import PdfImage from "./download.jpg";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
    setText("");
  };

  return (
    <div className="upload-section h-100 position-relative">
      <h5>
        <span>
          <LuFileSymlink />
        </span>
        Get Complete info of any case from AI-driven research assistance
      </h5>
      <div className="text-area">
        <textarea
          name=""
          id=""
          className="w-100 p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ex:Land dispute, Mumbai, recent judgements."
        ></textarea>
      </div>
      <div className="mb-6 pt-4 file-upload">
        <p className="text-center">
          <span>
            <MdOutlineFileUpload />
          </span>
        </p>
        <div className="d-inline-block">
          <label htmlFor="file" className="click-style">
            <div>
              <span className="formbold-drop-file">
                Drag and drop files or click here
              </span>
            </div>
          </label>
          <p className="upload-text">Upload a file</p>
          <input
            type="file"
            name="file"
            id="file"
            multiple
            className="text-center input-file"
            onChange={handleFileChange}
          />
        </div>
        <div className="py-2 mt-4 mx-auto text-muted text-center">
          <p className="mb-0 text-muted">
            <strong>Maximum Uploads: 1</strong>
          </p>
          <p className="text-muted">File Formats: JPG, PNG, pdf, docx, etc.</p>
        </div>
      </div>

      <div className="file-list">
        {files.length > 0 && (
          <div>
            {files.map((file, index) => (
              <div
                key={index}
                className="d-flex justify-content-between file-item"
              >
                <div>
                  <a href={file.url} target="_blank" rel="noopener noreferrer">
                    <img src={PdfImage} alt="" className="icon-img" />
                    <span className="text-secondary">{file.name}</span>
                    {/* <p>{(file.size / 1024).toFixed(2)} KB</p> */}
                  </a>
                </div>
                <div>
                  <IoMdClose />
                </div>
              </div>
            ))}

            <button className="button">Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
