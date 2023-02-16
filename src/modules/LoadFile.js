import { Parser } from "../logic/Parser";
import React, { useContext, useRef } from "react";
import { TextContext } from "../context/TextContext";
import Button from "./Button";

function LoadFile() {
  const { setFileText, setStatus } = useContext(TextContext);
  const inputRef = useRef(null);

  // Logic for reading Files
  const showFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);

    //when the file is ready, red the content, call the parser and update the status
    reader.onload = (e) => {
      const text = reader.result;
      setFileText(text);
      e.target.value = null;

      const newState = Parser(text);
      // if the parse was successful then
      if (newState !== -1) {
        setStatus(newState);
      }
    };
  };

  const handleClick = (e) => {
    inputRef.current.click();
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        type="file"
        id="myInput"
        ref={inputRef}
        onChange={(e) => showFile(e)}
      />
      <Button primary className="mb-5" onClick={handleClick}>
        Uplod Configuration File
      </Button>
    </div>
  );
}

export default LoadFile;
