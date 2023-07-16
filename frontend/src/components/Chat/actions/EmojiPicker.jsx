import { EmojiIcon } from "../../../svg";

function EmojiPicker() {
  return (
    <li>
      <button className="btn" type="button">
        <EmojiIcon className="dark:fill-dark_svg_1"></EmojiIcon>
      </button>
      {/* Emoji picker */}
    </li>
  );
}

export default EmojiPicker;
