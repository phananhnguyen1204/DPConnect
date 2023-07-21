import { CloseIcon } from "../../../svg";
import ValidIcon from "../../../svg/Valid";
import ring from "./audio/ringtone.mp3";
import { useRef, useState } from "react";
import { useEffect } from "react";

function Ringing({ call, setCall, name, picture }) {
  const { receivingCall, callEnded } = call;
  const [timer, setTimer] = useState(0);

  let interval;
  const handleTimer = () => {
    interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  console.log(timer);
  useEffect(() => {
    if (timer <= 10) {
      handleTimer();
    } else {
      setCall({ ...call, receivingCall: false });
    }
    console.log(receivingCall);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="dark:bg-dark_bg_1 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg z-30">
      {/* Container */}
      <div className="p-4 flex items-center justify-between gap-x-8">
        {/* Call infos */}
        <div className="flex items-center gap-x-2">
          <img
            src={picture}
            alt={`caller profile picture`}
            className="w-28 h-28 rounded-full"
          ></img>
          <div>
            <h1 className="dark:text-white">
              <b>{name}</b>
            </h1>
            <span className="dark:text-dark_text_2">Chatapp video ...</span>
          </div>
        </div>

        {/* Call Action */}
        <ul className="flex items-center gap-x-2">
          <li>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500">
              <CloseIcon className="fill-white w-5"></CloseIcon>
            </button>
          </li>
          <li>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500">
              <ValidIcon className="fill-white w-6 mt-2"></ValidIcon>
            </button>
          </li>
        </ul>
      </div>
      {/*Ringtone*/}
      <audio src={ring} autoPlay={true} loop={true}></audio>
    </div>
  );
}

export default Ringing;
