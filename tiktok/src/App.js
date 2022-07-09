import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Follwing from '~/pages/Follwing';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/follwing" element={<Follwing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
