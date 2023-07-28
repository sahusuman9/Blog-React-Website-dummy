
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import TopBar from "./components/topbar/TopBar";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


function App() {

  const user = false;

  return (
    <Router>
      <TopBar/>

      <Routes>

        <Route path="/"  element={<Home/>}>
        </Route>

        <Route path="/register"  element={user ? <Home/> : <Register/>}>
        </Route>

        <Route path="/login"  element={user ? <Home/> : <Login/>}>
        </Route>

        <Route path="/write"  element={user ? <Write/> : <Register/>}>
        </Route>

        <Route path="/settings"  element={user ? <Settings/> : <Register/>}>
        </Route>

        <Route path="/post/:postId"  element={<Single />}>
        </Route>


      </Routes>
     
    </Router>
    
  );
}

export default App;
