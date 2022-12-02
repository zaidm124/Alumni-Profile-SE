import { Route, Routes } from "react-router-dom";
import About_us from "./components/About_us";
import SearchAlumni from "./components/AlumniList";
import Conversation from "./components/Conversation";
import Landing from "./components/Landing";
import Login from "./components/Login";
import MyProfile from "./components/ProfileForStdnt";
import Profile from "./components/ProfileForViewer";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/about" element={<About_us />} />
        <Route exact path="/searchAlumni" element={<SearchAlumni />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/myprofile" element={<MyProfile />} />
        <Route exact path="/conversation" element={<Conversation />} />
      </Routes>
    </div>
  );
}

export default App;
