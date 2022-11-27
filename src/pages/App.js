import './App.scss';
import ProgressBar from '../components/progress-bar/ProgressBar';
import Home from './home/Home';
import ProductBacklog from './product-backlog/ProductBacklog';
import Footer from '../components/footer/Footer'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <ProgressBar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-backlog" element={<ProductBacklog />} />
      </Routes>
    </div>
  );
}

export default App;
