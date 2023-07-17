import { useSelector } from "react-redux";
import { SendIcon } from "../../../../svg";
import Add from "./Add";

function HandleAndSend({ activeIndex, setActiveIndex }) {
  const { files } = useSelector((state) => state.chat);
  return (
    <div className="w-[97%] flex items-center justify-between mt-2 border-t dark:border-dark_border_2">
      {/* Empty */}
      <span></span>
      {/* List files */}
      <div className="flex gap-x-2 items-center">
        {files.map((file, i) => (
          <div
            key={i}
            className={`w-14 h-14 mt-2 border dark:border-white rounded-md overflow-hidden cursor-pointer
            ${activeIndex === i ? "border-[3px] !border-green_1" : ""}
            `}
            onClick={() => setActiveIndex(i)}
          >
            {file.type === "IMAGE" ? (
              <img
                src={file.fileData}
                alt=""
                className="w-full h-full object-cover"
              ></img>
            ) : (
              <img
                src={`../../../../images/file/${file.type}.png`}
                alt=""
                className="w-8 h-10 mt-1.5 ml-2.5"
              ></img>
            )}
          </div>
        ))}
        {/* Add another file */}
        <Add setActiveIndex={setActiveIndex}></Add>
      </div>
      {/* Send Button */}
      <div className="bg-green_1 w-16 h-16 mt-2 rounded-full flex items-center justify-center cursor-pointer">
        <SendIcon className="fill-white"></SendIcon>
      </div>
    </div>
  );
}

export default HandleAndSend;
