import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatContainer from "../components/Chat/ChatContainer";
import WhatsappHome from "../components/Chat/welcome/WhatsappHome";
import { Sidebar } from "../components/sidebar";
import SocketContext from "../context/SocketContext";
import {
  getConversations,
  updateMessagesAndConversations,
} from "../features/chatSlice";

function Home({ socket }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { activeConversation } = useSelector((state) => state.chat);
  //typing
  const [typing, setTyping] = useState(false);
  // console.log("activeConversation", activeConversation);

  //JOIN User into Socket.io
  useEffect(() => {
    socket.emit("join", user._id);
    //get online user
    socket.on("get-online-users", (users) => {
      console.log("online users", users);
      setOnlineUsers(users);
    });
  }, [user]);

  //get Conversations
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, [user, dispatch]);

  useEffect(() => {
    //listening to received messaged
    socket.on("receive message", (message) => {
      dispatch(updateMessagesAndConversations(message));
    });

    //listening when a user is typing
    socket.on("typing", (conversation) => setTyping(conversation));
    socket.on("stop typing", () => setTyping(false));
  }, [socket]);
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center  overflow-hidden">
      {/* container */}
      <div className="container flex h-screen py-[19px]">
        {/* SideBar */}
        <Sidebar onlineUsers={onlineUsers} typing={typing}></Sidebar>
        {activeConversation._id ? (
          <ChatContainer
            onlineUsers={onlineUsers}
            typing={typing}
          ></ChatContainer>
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
