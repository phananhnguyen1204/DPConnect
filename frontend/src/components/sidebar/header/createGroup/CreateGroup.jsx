import { useState } from "react";
import { useSelector } from "react-redux";
import { ReturnIcon } from "../../../../svg";
import MultipleSelect from "./MultipleSelect";
import UnderlineInput from "./UnderlineInput";

function CreateGroup() {
  const { user } = useSelector((state) => state.user);
  const { status } = useSelector((state) => state.chat);
  const [name, setName] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSearch = async (e) => {};

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
        {/* Multiple select */}
        <MultipleSelect
          selectedUsers={selectedUsers}
          searchResults={searchResults}
          setSelectedUsers={setSelectedUsers}
          handleSearch={handleSearch}
        ></MultipleSelect>
      </div>
    </div>
  );
}

export default CreateGroup;
