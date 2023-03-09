import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import DashboardAdmin from "./components/admin/DashboardAdmin";
import Statistique from "./components/admin/Statistique/Statistique";
import Client from "./components/admin/Client/Client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tippy.js/dist/tippy.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<DashboardAdmin />}>
            <Route path="/statistique" element={<Statistique />} />
            <Route path="/" element={<Client/>}/>          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
