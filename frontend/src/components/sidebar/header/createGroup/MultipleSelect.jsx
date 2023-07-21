import Select, { NonceProvider } from "react-select";

function MultipleSelect({
  selectedUsers,
  searchResults,
  handleSearch,
  setSelectedUsers,
}) {
  return (
    <div className="mt-4">
      <Select
        options={searchResults}
        onChange={setSelectedUsers}
        onKeyDown={(e) => handleSearch(e)}
        isMulti
        placeholder="Search, select users"
        formatOptionLabel={(user) => (
          <div className="flex items-center gap-1">
            <img
              src={user.picture}
              alt=""
              className="w-8 h-8 object-cover rounded-full"
            ></img>
            <span className="text-[#222]">{user.label}</span>
          </div>
        )}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: " none",
            borderColor: "transparent",
            background: "transparent",
          }),
        }}
      />
    </div>
  );
}

export default MultipleSelect;
