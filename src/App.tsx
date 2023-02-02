import "./styles.scss"
import Login from './pages/Login';
import Home from "./pages/Home";
import History from "./pages/History"
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/history' element={<History />} />

      </Routes>

    </div>
  );
}

export default App;
