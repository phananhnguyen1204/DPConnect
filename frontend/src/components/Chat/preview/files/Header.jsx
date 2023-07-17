import { useDispatch, useSelector } from "react-redux";
import { clearFiles } from "../../../../features/chatSlice";
import { CloseIcon } from "../../../../svg";

function Header() {
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.files);
  const clearFilesHandler = () => {
    dispatch(clearFiles());
  };
  return (
    <div className="w-full ">
      {/* Container */}
      <div className="w-full flex items-center justify-between">
        {/* Close icon / empty files */}
        <div
          className="translate-x-4 cursor-pointer"
          onClick={() => clearFilesHandler()}
        >
          <CloseIcon className="dark:fill-dark_svg_1"></CloseIcon>
        </div>
        {/* File name */}
        <h1 className="dark:text-dark_text_1 text-[15px]">
          {files[0]?.file?.name}
        </h1>
        {/* Empty tag */}
        <span></span>
      </div>
    </div>
  );
}

export default Header;
