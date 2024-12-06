
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Akademiya from './pages/Akademiya';
import Haqqimizda from './pages/Haqqimizda';
import TedrisSaheleri from './pages/TedrisSaheleri';
import BizimleElaqe from './pages/BizimleElaqe';
import './index.css'
function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Akademiya />} />
        <Route path="/haqqimizda" element={<Haqqimizda />} />
        <Route path="/tedris-saheleri" element={<TedrisSaheleri />} />
        <Route path="/bizimle-elaqe" element={<BizimleElaqe />} />
      </Routes>
    </Router>
  );
}

export default App;


