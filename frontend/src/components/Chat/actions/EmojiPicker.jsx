import { CloseIcon, EmojiIcon } from "../../../svg";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { useEffect } from "react";

function EmojiPickerApp({
  textRef,
  setMessage,
  message,
  showPicker,
  setShowPicker,
  setShowAttachments,
}) {
  const [cursorPosition, setCursorPosition] = useState();
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleEmoji = (emojiData, e) => {
    const { emoji } = emojiData;
    const ref = textRef.current;
    ref.focus();
    const start = message.substring(0, ref.selectionStart);
    const end = message.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setMessage(newText);
    setCursorPosition(start.length + emoji.length);
  };
  return (
    <li>
      <button
        onClick={() => {
          setShowPicker((prev) => !prev);
          setShowAttachments(false);
        }}
        className="btn"
        type="button"
      >
        {showPicker ? (
          <CloseIcon className="dark:fill-dark_svg_1"></CloseIcon>
        ) : (
          <EmojiIcon className="dark:fill-dark_svg_1"></EmojiIcon>
        )}
      </button>
      {/* Emoji picker */}

      {showPicker ? (
        <div className="openEmojiAnimation absolute bottom-[60px] left-[-0.5px]">
          <EmojiPicker theme="dark" onEmojiClick={handleEmoji}></EmojiPicker>
        </div>
      ) : null}
    </li>
  );
}

export default EmojiPickerApp;
