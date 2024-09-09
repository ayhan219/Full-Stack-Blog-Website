import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyPost from "./pages/MyPost";
import Settings from "./pages/Settings";
import Content from "./pages/Content";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider} from "./UserContext/UserContext";
import CreatePost from "./pages/CreatePost";
import About from "./pages/About";

function App() {


  return (
    <>
      
        <BrowserRouter>
        <UserProvider>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mypost" element={<MyPost />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/content/:id" element={<Content />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
          </UserProvider>
        </BrowserRouter>
      
    </>
  );
}

export default App;
