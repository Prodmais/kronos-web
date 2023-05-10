import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import Boards from './pages/boards';
import CreateProject from './pages/createProject';
import CreateUser from './pages/CreateUser';
import Login from './pages/login';
import Main from './pages/main';
import Members from './pages/members';
import MessageCreateProject from './pages/messageCreateProject';
import AuthGuardRoute from './guard/auth-guard';
import ListProjects from './pages/ListProjects';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='auth' element={ <Login /> }></Route>
          <Route path='signup' element={ <CreateUser /> }></Route>
          <Route path='/' element={<AuthGuardRoute />}>
            <Route path='' element={<Main />}>
                <Route path='projetos'>

                  <Route path='' element={<ListProjects />} />
                  <Route path='boards' index element={ <Boards /> } />
                  <Route path='primeiro-projeto' element={ <MessageCreateProject /> } />
                  <Route path='criar' element={ <CreateProject /> } />

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
