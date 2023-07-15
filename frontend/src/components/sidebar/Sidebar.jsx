import SidebarHeader from "./header/SidebarHeader";
import { Notifications } from "./notifications";

function Sidebar() {
  return (
    <div className="w-[40%] h-full select-none">
      {/* Sidebar header */}
      <SidebarHeader></SidebarHeader>
      {/* Notification */}
      <Notifications></Notifications>
    </div>
  );
}

export default Sidebar;
