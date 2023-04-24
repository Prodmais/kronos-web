import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Members from './pages/members';


function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Members />}></Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App;
