import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
