import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../components/sidebar";
import { getConversations } from "../features/chatSlice";

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  //get Conversations
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, [user, dispatch]);
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* container */}
      <div className="container flex h-screen">
        {/* SideBar */}
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default Home;
