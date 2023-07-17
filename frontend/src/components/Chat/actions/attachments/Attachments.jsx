import { AttachmentIcon } from "../../../../svg";
import Menu from "./menu/Menu";

function Attachments({ setShowAttachments, showAttachments, setShowPicker }) {
  return (
    <li className="relative">
      <button
        onClick={() => {
          setShowAttachments((prev) => !prev);
          setShowPicker(false);
        }}
        type="button"
        className="btn"
      >
        <AttachmentIcon className="dark:fill-dark_svg_1"></AttachmentIcon>
      </button>
      {/* Menu */}
      {showAttachments ? <Menu></Menu> : null}
    </li>
  );
}

export default Attachments;
