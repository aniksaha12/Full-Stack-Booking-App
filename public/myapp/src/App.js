
import {BrowserRouter, Routes, Route, Form} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotelinit from "./pages/hotels/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotelinit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
