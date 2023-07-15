import { useState } from "react";
import { Conversations } from "./conversations";
import SidebarHeader from "./header/SidebarHeader";
import { Notifications } from "./notifications";
import { Search } from "./search";

function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  return (
    <div className="w-[40%] h-full select-none">
      {/* Sidebar header */}
      <SidebarHeader></SidebarHeader>
      {/* Notification */}
      <Notifications></Notifications>
      {/* Search */}
      <Search
        searchLength={searchResults.length}
        setSearchResults={setSearchResults}
      ></Search>
      {/* Conversations */}
      <Conversations></Conversations>
    </div>
  );
}

export default Sidebar;
