import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Regis from './pages/Register';
import Ml from './pages/Ml';
import Pubg from './pages/Pubg';
import FF from './pages/FF';
import Aov from './pages/Aov';
import Bff from './pages/Bff';
import Baov from './pages/Baov';

import './App.css';

function App() {
  return (
    <div className='flex justify-center p-6 w-screen h-screen bg-white overflow-y-auto'>
      <div className='w-full'>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Regis />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/ml" element={<Ml />}></Route>
            <Route path="/pubg" element={<Pubg />}></Route>
            <Route path="/ff" element={<FF />}></Route>
            <Route path="/aov" element={<Aov />}></Route>
            <Route path="/bff" element={<Bff />}></Route>
            <Route path="/baov" element={<Baov />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
