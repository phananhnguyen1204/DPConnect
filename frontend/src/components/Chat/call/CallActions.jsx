import { ArrowIcon, MuteIcon } from "../../../svg";
import DialIcon from "../../../svg/Dial";
import SpeakerIcon from "../../../svg/Speaker";
import VideoDialIcon from "../../../svg/VideoDial";

function CallActions() {
  return (
    <div className="h-22 w-full absolute bottom-0 z-40 px-1">
      {/* Container */}
      <div className="relative bg-[#222] px-4 pt-6 pb-12 rounded-xl">
        {/* Expand icon */}
        <button className="-rotate-90 scale-y-[300%] absolute top-1 left-1/2">
          <ArrowIcon className="fill-dark_svg_2"></ArrowIcon>
        </button>
        {/* Acitons */}
        <ul className="flex items-center justify-between">
          <li>
            <button className="btn_secondary">
              <SpeakerIcon className="fill-white w-6"></SpeakerIcon>
            </button>
          </li>
          <li>
            <button className="btn_secondary">
              <VideoDialIcon className="fill-white w-14 mt-2.5"></VideoDialIcon>
            </button>
          </li>
          <li>
            <button className="btn_secondary">
              <MuteIcon className="fill-white 2-5"></MuteIcon>
            </button>
          </li>
          <li>
            <button className="btn_secondary bg-red-600 rotate-[135deg]">
              <DialIcon className="fill-white w-6"></DialIcon>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CallActions;
