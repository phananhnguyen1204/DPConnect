import { useState } from "react";
import { Conversations } from "./conversations";
import SidebarHeader from "./header/SidebarHeader";
import { Notifications } from "./notifications";
import { Search } from "./search";
import SearchResults from "./search/SearchResults";

function Sidebar({ onlineUsers }) {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="flex0030 w-[40%] h-full select-none">
      {/* Sidebar header */}
      <SidebarHeader></SidebarHeader>
      {/* Notification */}
      <Notifications></Notifications>
      {/* Search */}
      <Search
        searchLength={searchResults.length}
        setSearchResults={setSearchResults}
      ></Search>
      {searchResults.length > 0 ? (
        <>
          <SearchResults
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          ></SearchResults>
        </>
      ) : (
        <>
          {/* Conversations */}
          <Conversations onlineUsers={onlineUsers}></Conversations>
        </>
      )}
    </div>
  );
}

export default Sidebar;
