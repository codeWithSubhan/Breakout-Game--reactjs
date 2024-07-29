import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Breakout from "./game/breakout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<h1>Home</h1>} /> */}
          <Route path="/" element={<Breakout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
