import { useSelector } from "react-redux";
import Message from "./Message";

function ChatMessages() {
  const { messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  return (
    <div
      className="mb-[60px] bg-[url('https://res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg')]
  bg-cover bg-no-repeat
  "
    >
      {/* Container */}
      <div className="scrollbar overflow_scrollbar overflow-auto py-2 px-[5%]">
        {/* Messages */}
        {messages &&
          messages.map((message) => (
            //need to check if the message is ours or other user's
            //if it's our message. return true, and it will show to the right
            <Message
              message={message}
              key={message._id}
              isMe={user._id === message.sender._id}
            ></Message>
          ))}
      </div>
    </div>
  );
}

export default ChatMessages;
