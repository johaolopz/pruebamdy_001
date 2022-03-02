import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom'
import About from './components/myComponents/About'
import Contact from './components/myComponents/Contact'

function App() {
  return (
    <div className="test-app">
            <h1>Data Table Widget</h1>
            <NavLink to='/about' >
                About
            </NavLink>
            /
            <NavLink to='/contact' >
                Contact
            </NavLink>
            <hr/>
            <Routes>
                <Route
                    exact path='/about'
                    element={<About/>}
                />
                <Route
                    exact path='/contact'
                    element={<Contact/>}
                />
            </Routes>
    </div>
  );
}

export default App;
