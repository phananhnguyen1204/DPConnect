import { useState } from "react";
import { Conversations } from "./conversations";
import SidebarHeader from "./header/SidebarHeader";
import { Notifications } from "./notifications";
import { Search } from "./search";

function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="w-[40%] h-full select-none">
      {/* Sidebar header */}
      <SidebarHeader></SidebarHeader>
      {/* Notification */}
      <Notifications></Notifications>
      {/* Search */}
      <Search searchLength={searchResults.length}></Search>
      {/* Conversations */}
      <Conversations></Conversations>
    </div>
  );
}

export default Sidebar;
