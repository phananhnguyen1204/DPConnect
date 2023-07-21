import Ringing from "./Ringing";

function Call({ call, setCall, callAccepted }) {
  const { receivingCall, callEnded } = call;
  return (
    <div>
      {/*Ringing*/}
      {receivingCall && !callAccepted ? (
        <Ringing call={call} setCall={setCall} />
      ) : null}
    </div>
  );
}

export default Call;
