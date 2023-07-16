import { useSelector } from "react-redux";
import ChatHeader from "./header/ChatHeader";

function ChatContainer() {
  return (
    <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      {/* Container */}
      <div>
        {/* ChatHeader */}
        <ChatHeader></ChatHeader>
      </div>
    </div>
  );
}

export default ChatContainer;
