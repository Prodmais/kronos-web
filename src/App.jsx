import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import Boards from './pages/Boards';
import CreateProject from './pages/CreateProject';
import Login from './pages/Login';
import Main from './pages/Main';
import Members from './pages/Members';
import MessageCreateProject from './pages/MessageCreateProject';
import AuthGuardRoute from './guard/auth-guard';
import ListProjects from './pages/ListProjects';
import InitialPage from './pages/InitialPage';
import CreateUser from './pages/CreateUser';
import { Alert, Snackbar } from '@mui/material';
import PrivateGuardRoute from './guard/private-guard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element={<AuthGuardRoute />}>

            <Route path='auth' element={ <Login /> } />
            <Route path='signup' element={<CreateUser />}/>

          </Route>

          <Route path='' element={<PrivateGuardRoute />}>
            <Route path='' element={<Main />}>

                <Route path='' element={<Navigate to={'inicio'} />} />
                <Route path='inicio' element={ <InitialPage /> }/>
                <Route path='quadros' element={ <Boards /> }/>

                <Route path='projetos'>

                  <Route path='' element={<ListProjects />} />
                  <Route path='boards' index element={ <Boards /> } />
                  <Route path='primeiro' element={ <MessageCreateProject /> } />
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
