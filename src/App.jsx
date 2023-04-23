import { Route, Routes } from 'react-router';
import Members from './pages/members';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Members /> }></Route>
        </Routes>
      </Router>
      
    </main>
  )
}

export default App;
