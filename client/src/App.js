import { Route, Routes } from "react-router-dom";
import About_us from "./components/About_us";
import Landing from "./components/Landing";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About_us/>}/>

      </Routes>
    </div>
  );
}

export default App;
