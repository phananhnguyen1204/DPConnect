import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addFiles } from "../../../../features/chatSlice";
import { CloseIcon } from "../../../../svg";
import { getFileType } from "../../../../utils/file";

function Add({ setActiveIndex }) {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const filesHandler = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((file) => {
      if (
        file.type !== "application/pdf" &&
        file.type !== "text/plain" &&
        file.type !== "application/msword" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
        file.type !== "application/vnd.ms-powerpoint" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.presentationml.presentation" &&
        file.type !== "application/vnd.ms-excel" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
        file.type !== "application/vnd.rar" &&
        file.type !== "application/zip" &&
        file.type !== "audio/mpeg" &&
        file.type !== "audio/wav" &&
        file.type !== "image/png" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/gif" &&
        file.type !== "video/mp4"
      ) {
        files = files.filter((item) => item.name !== file.name);
        return;
      } else if (file.size > 1024 * 1024 * 5) {
        files = files.filter((item) => item.name !== file.name);
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          dispatch(
            addFiles({
              file: file,
              fileData: e.target.result,
              type: getFileType(file.type),
            })
          );
        };
      }
    });
  };
  return (
    <>
      <div
        onClick={() => inputRef.current.click()}
        className="w-14 h-14 mt-2 border dark:border-white rounded-md flex items-center justify-center cursor-pointer"
      >
        <span className="rotate-45">
          <CloseIcon className="dark:fill-dark_svg_1"></CloseIcon>
        </span>
      </div>
      <input
        type="file"
        hidden
        ref={inputRef}
        accept="application/*,text/plain,image/png,image/jpeg,image/gif,video/mp4,video/mpeg"
        onChange={filesHandler}
      ></input>
    </>
  );
}

export default Add;
