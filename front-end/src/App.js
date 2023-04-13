import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import DashboardAdmin from "./components/admin/DashboardAdmin";
import Statistique from "./components/admin/Statistique/Statistique";
import Client from "./components/admin/Client/Client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import Agent from "./components/admin/Agent/Agent";
import Reservation from "./components/admin/Reservation/Reservation";
import DashAgent from "./components/agent/DashAgent";
import Statistiqueagent from "./components/agent/Statistiqueagent/Statistiqueagent";
// import Reservation from "./components/agent/Reservation/Reservation";
import Voyages from "./components/admin/Voyages/Voyages";
import Profile from "./components/admin/Profile/Profile";
import UpdateProfil from "./components/admin/Profile/UpdateProfil";
import Leandinpage from "./components/client/Leandinpage";
import Page from "./components/client/Page";
import OurPackage from "./components/client/OurPackage/OurPackage";
import PrivetAdminRout from "./components/Private/PrivetAdminRout/PrivetAdminRout";
import NotFound from "./components/NotFound/NotFound";
import PrivatClientRout from "./components/Private/PrivatClientRout/PrivatClientRout";
import PrivatRoute from "./components/Private/PrivatRoute/PrivatRoute";
import Updatevoyage from "./components/admin/Voyages/Updatevoyage";
import Detail from "./components/client/Detail/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />

      <Route element={<PrivatRoute />}>
        <Route element={<PrivetAdminRout />}>
          <Route element={<DashboardAdmin />}>
            <Route path="/statistique" element={<Statistique />} />
            <Route path="/client" element={<Client />} />
            <Route path="/agent" element={<Agent />} />
            <Route path="/voyage" element={<Voyages />} />
            <Route path="/reservation" element={<Reservation/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/updateProfil' element={<UpdateProfil />} />
            <Route path='/updateVoyage/:id' element={<Updatevoyage />} />
          </Route>
        </Route>

        <Route element={<DashAgent />}>
          <Route path="/statistiqueagent" element={<Statistiqueagent />} />
          {/* <Route path="/reservation" element={<Reservation />} /> */}
          <Route path="/voyage" element={<Voyages />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          {/* <Route path='/updateProfil' element={<UpdateProfil />} /> */}
        </Route>

        <Route element={<PrivatClientRout />}>
          <Route element={<Leandinpage />}>
            <Route path="/clientpage" element={<Page />} />
            <Route path="/ourPackage" element={<OurPackage />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
