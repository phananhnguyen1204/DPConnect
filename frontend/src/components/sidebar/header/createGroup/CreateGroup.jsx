import { useState } from "react";
import { ReturnIcon } from "../../../../svg";
import UnderlineInput from "./UnderlineInput";

function CreateGroup() {
  const [name, setName] = useState();
  return (
    <div className="createGroupAnimation relative flex0030 h-full z-40">
      {/* Container */}
      <div className="mt-5">
        {/* Return/Close button */}
        <button className="btn w-6 h-6 border">
          <ReturnIcon className="fill-white"></ReturnIcon>
        </button>
        {/* Group name image */}
        <UnderlineInput name={name} setName={setName}></UnderlineInput>
      </div>
    </div>
  );
}

export default CreateGroup;
