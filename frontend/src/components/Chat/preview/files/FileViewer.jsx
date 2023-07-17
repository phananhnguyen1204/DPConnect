import { useSelector } from "react-redux";

function FileViewer({ activeIndex }) {
  const { files } = useSelector((state) => state.chat);

  return (
    <div className="w-full max-w-[60%]">
      {/* Container */}
      <div className="flex justify-center items-center">
        {files[activeIndex].type === "IMAGE" ? (
          <img
            src={files[activeIndex].fileData}
            alt=""
            className="max-w-[80%] object-contain hview"
          ></img>
        ) : (
          <div className="min-w-full hview flex flex-col items-center justify-center">
            {/* File Icon Image */}
            <img
              src={`../../../../images/file/${files[activeIndex].type}.png`}
              alt={files[activeIndex].type}
            ></img>
            <h1 className="dark:text-dark_text_2 text-2xl">
              No Preview Available
            </h1>
            {/* File size */}
            <span className="dark:text-dark_text_2">
              {files[activeIndex]?.file?.size} kB - {files[activeIndex]?.type}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileViewer;
