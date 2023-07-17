import { useState } from "react";
import FileViewer from "./FileViewer";
import HandleAndSend from "./HandleAndSend";
import Header from "./Header";
import Input from "./Input";

function FilesPreview() {
  const [message, setMessage] = useState("");
  return (
    <div className="relative py-2 w-full flex items-center justify-center">
      {/* Container */}
      <div className="w-full flex flex-col items-center">
        {/* HEader */}
        <Header></Header>
        {/* Viewing selected Files */}
        <FileViewer></FileViewer>
        <div className="w-full flex flex-col items-center">
          {/* Message input */}
          <Input message={message} setMessage={setMessage}></Input>
          {/* Send and manipulate file */}
          <HandleAndSend></HandleAndSend>
        </div>
      </div>
    </div>
  );
}

export default FilesPreview;
