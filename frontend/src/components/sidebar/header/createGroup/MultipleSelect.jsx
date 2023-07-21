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
