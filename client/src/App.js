import { Route, Routes } from "react-router-dom";
import About_us from "./components/About_us";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/about" element={<About_us />} />
      </Routes>
    </div>
  );
}

export default App;
