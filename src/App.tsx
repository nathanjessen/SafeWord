import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as paths from "./constants/routes";
import './styles/tailwind.css';
import Home from "./pages/Home";
import Footer from "./components/Footer";

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
