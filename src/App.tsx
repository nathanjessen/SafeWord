import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import * as paths from './constants/routes';
import Home from './pages/Home';
import './styles/tailwind.css';

export default function App() {
  return (
    <div className=''>
      <Router>
        <div className='flex flex-col flex-1 min-h-0'>
          <Routes>
            <Route path={paths.ROUTE_DEFAULT} element={<Home />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </div>
  );
}
