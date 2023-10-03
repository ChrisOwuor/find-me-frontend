import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddPerson from "./pages/AddPerson";
import Report from "./pages/Report";
import Find from "./pages/Find";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_person" element={<AddPerson />} />
          <Route path="/find_person" element={<Find />} />
          <Route path="/report_person" element={<Report />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
