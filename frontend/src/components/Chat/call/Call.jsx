import Header from "./Header";
import Ringing from "./Ringing";

function Call({ call, setCall, callAccepted }) {
  const { receivingCall, callEnded } = call;
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] z-10 rounded-2xl overflow-hidden callbg">
      {/* Container */}
      <div>
        <div>
          {/* Header */}
          <Header></Header>
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
