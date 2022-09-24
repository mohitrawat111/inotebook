
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="about/*" element={<About />} /> Relpacement of exact path */}
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
