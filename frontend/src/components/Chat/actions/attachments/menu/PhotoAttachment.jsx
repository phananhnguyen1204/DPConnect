import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFiles } from "../../../../../features/chatSlice";
import { PhotoIcon } from "../../../../../svg";

function PhotoAttachment() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.chat);
  console.log("files", files);

  const imageHandler = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((img) => {
      if (
        img.type !== "image/png" &&
        img.type !== "image/jpeg" &&
        img.type !== "image/gif"
      ) {
        files = files.filter((item) => item.name !== img.name);
        return;
      } else if (img.size > 1024 * 1024 * 5) {
        files = files.filter((item) => item.name !== img.name);
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (e) => {
          dispatch(
            addFiles({ file: img, imgData: e.target.result, type: "image" })
          );
        };
      }
    });
  };
  return (
    <li>
      <button
        type="button"
        className="bg-[#BF59CF] rounded-full"
        onClick={() => inputRef.current.click()}
      >
        <PhotoIcon></PhotoIcon>
      </button>
      <input
        type="file"
        hidden
        ref={inputRef}
        accept="image/png,image/jpeg,image/gif"
        onChange={imageHandler}
      ></input>
    </li>
  );
}

export default PhotoAttachment;
