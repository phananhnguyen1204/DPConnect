import { useSelector } from "react-redux";

function FileViewer() {
  const { files } = useSelector((state) => state.chat);

  return (
    <div className="w-full max-w-[60%]">
      {/* Container */}
      <div className="flex justify-center items-center">
        {files[0].type === "IMAGE" ? (
          <img
            src={files[0].fileData}
            alt=""
            className="max-w-[80%] object-contain hview"
          ></img>
        ) : (
          <div className="min-w-full hview flex flex-col items-center justify-center">
            {/* File Icon Image */}
            <img
              src={`../../../../images/file/${files[0].type}.png`}
              alt={files[0].type}
            ></img>
            <h1 className="dark:text-dark_text_2 text-2xl">
              No Preview Available
            </h1>
            {/* File size */}
            <span className="dark:text-dark_text_2">
              {files[0]?.file?.size} kB - {files[0]?.type}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileViewer;
