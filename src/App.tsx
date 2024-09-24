import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Api } from "./utils/api/api"
import { FirebaseContext } from './context/firebaseContext';
import { auth, db } from "./firebaseConfig"
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Todo from "./pages/todo";
import Login from './pages/login';
import Dashboard from './pages/dashboard'
import { FinanceProvider } from './context/FinanceContext';
import './App.css';


function App() {

  const api: Api = new Api(db, auth)

  const renderizarBotoes = () => (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );

  return (
    <FirebaseContext.Provider value={{ api }}>
      <FinanceProvider>
        <Router>
          <div className='botoes'>{renderizarBotoes()}</div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
      </FinanceProvider>
    </FirebaseContext.Provider>
  )
}

export default App;