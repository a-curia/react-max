import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import './App.css';
import Example from './components/Example';

import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobator</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
