import { useState } from "react";
import CallActions from "./CallActions";
import CallArea from "./CallArea";
import Header from "./Header";
import Ringing from "./Ringing";

function Call({ call, setCall, callAccepted, myVideo, userVideo, stream }) {
  const { receivingCall, callEnded } = call;
  const [showActions, setShowActions] = useState(false);
  return (
    <div
      onMouseOver={() => setShowActions(true)}
      onMouseOut={() => setShowActions(false)}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] z-10 rounded-2xl overflow-hidden callbg"
    >
      {/* Container */}
      <div>
        <div>
          {/* Header */}
          <Header></Header>
          {/* Call Area */}
          <CallArea name="Phan Anh"></CallArea>
          {/* Call Action */}
          {showActions ? <CallActions></CallActions> : null}
        </div>
        {/* Videos steam */}
        <div>
          {/* user video */}
          <div>
            <video
              ref={userVideo}
              playsInline
              muted
              autoPlay
              className="largeVideoCall"
            ></video>
          </div>

          {/* my video */}
          <div>
            <video
              ref={myVideo}
              playsInline
              muted
              autoPlay
              className={`SmallVideoCall ${showActions ? "moveVideoCall" : ""}`}
            ></video>
          </div>
        </div>
      </div>

      {/*Ringing*/}
      {receivingCall && !callAccepted ? (
        <Ringing call={call} setCall={setCall} />
      ) : null}
    </div>
  );
}

export default Call;
