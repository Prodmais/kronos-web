import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import AuthGuardRoute from './guard/auth-guard';
import PrivateGuardRoute from './guard/private-guard';
import CreateProject from './pages/CreateProject';
import CreateUser from './pages/CreateUser';
import InitialPage from './pages/InitialPage';
import ListProjects from './pages/ListProjects';
import MessageCreateProject from './pages/MessageCreateProject';
import Boards from './pages/boards';
import Login from './pages/login';
import Main from './pages/main';
import Members from './pages/members';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element={<AuthGuardRoute />}>
            <Route path='' element={<Navigate to='auth' />} />
            <Route path='auth' element={<Login />} />
            <Route path='signup' element={<CreateUser />} />

          </Route>

          <Route path='' element={<PrivateGuardRoute />}>
            <Route path='' element={<Main />}>

              <Route path='' element={<Navigate to={'inicio'} />} />
              <Route path='inicio' element={<InitialPage />} />
              <Route path='quadros/:id' element={<Boards />} />

              <Route path='projetos'>

                <Route path='' element={<ListProjects />} />
                <Route path='boards' index element={<Boards />} />
                <Route path='primeiro' element={<MessageCreateProject />} />
                <Route path='criar' element={<CreateProject />} />

              </Route>


              <Route path='membros' element={<Members />} />
            </Route>
          </Route>

          <Route path='*' element={<Navigate to='/' />} />

        </Routes>
      </Router>


    </div>
  )
}

export default App;
