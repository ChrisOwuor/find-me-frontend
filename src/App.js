import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import AddPerson from "./pages/AddPerson";
import Find from "./pages/Find";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import Single from "./pages/Single";

function App() {
  return (
    <div className="App bg-gradient-to-t	background-image: linear-gradient(to top, var(--tw-gradient-stops));">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<Single />}/>

          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/signup" element={<Signup />} />

          <Route path="/services" element={<Services />}>
            <Route path="add_person" element={<AddPerson />} />
            <Route path="find_person" element={<Find />} />
            <Route path="report_person" element={<Report />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
