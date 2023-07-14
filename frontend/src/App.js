// import { CallIcon, ChatIcon, DocumentIcon } from "./svg";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
function App() {
  // const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
