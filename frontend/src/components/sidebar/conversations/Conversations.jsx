import { useSelector } from "react-redux";
import Conversation from "./Conversation";

function Conversations() {
  const { conversations } = useSelector((state) => state.chat);
  console.log(conversations);
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations.map((convo) => {
            return <Conversation convo={convo} key={convo._id}></Conversation>;
          })}
      </ul>
    </div>
  );
}

export default Conversations;
