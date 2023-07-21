import moment from "moment";
import TraingleIcon from "../../../svg/triangle";
function Message({ message, isMe }) {
  return (
    <div
      className={`w-full flex mt-2 space-x-3 max-w-xs ${
        isMe ? "ml-auto justify-end" : ""
      }`}
    >
      {/* Message Container */}
      <div className="relative">
        {/* Sender user message */}
        {!isMe && (
          <div
            className={`absolute top-0.5 ${
              !isMe ? "left-[-40px]" : "right-[-40px]"
            }`}
          >
            <img
              src={message.sender.picture}
              alt=""
              className="w-8 h-8 rounded-full"
            ></img>
          </div>
        )}

        <div
          className={`relative h-full dark:text-dark_text_1 p-2 rounded-lg ${
            isMe ? "bg-green_3" : "dark:bg-dark_bg_2"
          }`}
        >
          {/* Messages */}
          <p className="float-left h-fill text-sm pb-4 pr-8">
            {message.message}
          </p>
          {/* Message Dare */}
          <span className="absolute right-1.5 bottom-1.5 float-right text-xs pt-6 text-dark_text_5">
            {moment(message.createdAt).format("HH:mm")}
          </span>
          {/* Triangle */}
          <span>
            {!isMe ? (
              <TraingleIcon className="dark:fill-dark_bg_2 rotate-[60deg] absolute top-[-5px] -left-1.5"></TraingleIcon>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Message;
