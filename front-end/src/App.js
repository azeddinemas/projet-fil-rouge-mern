import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import DashboardAdmin from "./components/admin/DashboardAdmin";
import Statistique from "./components/admin/Statistique/Statistique";
import Client from "./components/admin/Client/Client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/tippy.css';
import Agent from "./components/admin/Agent/Agent";
import DashAgent from "./components/agent/DashAgent";
import Statistiqueagent from "./components/agent/Statistiqueagent/Statistiqueagent";
import Reservation from "./components/agent/Reservation/Reservation";
import Voyages from "./components/agent/Voyages/Voyages";
import Profile from "./components/agent/Profile/Profile";
import UpdateProfil from "./components/agent/Profile/UpdateProfil";
import Leandinpage from "./components/client/Leandinpage";
import Page from "./components/client/Page";
import OurPackage from "./components/client/OurPackage/OurPackage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<DashboardAdmin />}>
          <Route path="/statistique" element={<Statistique />} />
          <Route path="/client" element={<Client />} />
          <Route path="/agent" element={<Agent />} />
        </Route>
        <Route element={<DashAgent />}>
          <Route path="/statistiqueagent" element={<Statistiqueagent />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/voyage" element={<Voyages />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/updateProfil' element={<UpdateProfil />} />
        </Route>
        <Route element={<Leandinpage />}>
          <Route path="/clientpage" element={<Page />} />
          <Route path="/ourPackage" element={<OurPackage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
