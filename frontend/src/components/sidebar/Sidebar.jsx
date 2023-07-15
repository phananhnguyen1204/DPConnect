import SidebarHeader from "./header/SidebarHeader";

function Sidebar() {
  return (
    <div className="w-[40%] h-full select-none">
      {/* Sidebar header */}
      <SidebarHeader></SidebarHeader>
    </div>
  );
}

export default Sidebar;
