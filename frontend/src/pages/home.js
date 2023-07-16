import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatContainer from "../components/Chat/ChatContainer";
import WhatsappHome from "../components/Chat/welcome/WhatsappHome";
import { Sidebar } from "../components/sidebar";
import SocketContext from "../context/SocketContext";
import { getConversations } from "../features/chatSlice";

function Home({ socket }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  // console.log("activeConversation", activeConversation);

  //JOIN User into Socket.io
  useEffect(() => {
    socket.emit("join", user._id);
  }, [user, socket]);

  //get Conversations
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, [user, dispatch]);
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center  overflow-hidden">
      {/* container */}
      <div className="container flex h-screen py-[19px]">
        {/* SideBar */}
        <Sidebar></Sidebar>
        {activeConversation._id ? (
          <ChatContainer></ChatContainer>
        ) : (
          <WhatsappHome></WhatsappHome>
        )}
      </div>
    </div>
  );
}

const HomeWithSocket = (props) => (
  <SocketContext.Consumer>
    {(socket) => <Home {...props} socket={socket} />}
  </SocketContext.Consumer>
);
export default HomeWithSocket;
