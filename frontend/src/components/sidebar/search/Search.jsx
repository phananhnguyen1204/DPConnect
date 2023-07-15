import { useState } from "react";
import { FilterIcon, ReturnIcon, SearchIcon } from "../../../svg";

function Search({ searchLength }) {
  const [show, setShow] = useState(false);
  const handleSearch = () => {};
  return (
    <div className="h-[49px] py-1.5">
      {/* Container */}
      <div className="px-[10px]">
        {/* Search input container */}
        <div className="flex items-center gap-x-2">
          <div className="w-full dark:bg-dark_bg_2 rounded-lg pl-2 flex">
            {show || searchLength > 0 ? (
              <span className="w-8 flex items-center justify-center rotateAnimation">
                <ReturnIcon className="fill-green_1 w-5"></ReturnIcon>
              </span>
            ) : (
              <span className="w-8 flex items-center justify-center ">
                <SearchIcon className="dark:fill-dark_svg_2 w-5"></SearchIcon>
              </span>
            )}
            <input
              type="text"
              placeholder="Search or start a new chat"
              className="input"
              onFocus={() => setShow(true)}
              onBlur={() => searchLength === 0 && setShow(false)}
              onKeyDown={(e) => handleSearch(e)}
            ></input>
          </div>
          <button className="btn">
            <FilterIcon className="dark:fill-dark_svg_2"></FilterIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;