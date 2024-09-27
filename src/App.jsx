import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import "preline/preline";
import StudyTourBandung from './pages/StudyTourBandung';
import StudyTourJogja from './pages/StudyTourJogja';
import StudyTourBali from './pages/StudyTourBali';
import StudyTourMalang from './pages/StudyTourMalang';
import StudyTourDieng from './pages/StudyTourDieng';
import StudyTourSemarang from './pages/StudyTourSemarang';
import StudyTourTegal from './pages/StudyTourTegal';
import StudyTourPangandaran from './pages/StudyTourPangandaran';
import StudyTourGarut from './pages/StudyTourGarut';
import StudyTourCirebon from './pages/StudyTourCirebon';
import Footer from './sections/Footer';
import WhatsappFloat from './sections/WhatsappFloat';
import Coorporate from './pages/Coorporate';
import Outbond from './pages/Outbond';
import CustomTrip from './pages/CustomTrip';
import Outbound from './pages/Outbound';
import SewaArmada from './pages/SewaArmada';
import Gallery from './pages/Gallery';
import ScrollToTop from './sections/ScrollToTop';
import NavbarBaru from './sections/NavbarBaru';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/studytour-bandung' element={<StudyTourBandung />} />
      <Route path='/studytour-yogyakarta' element={<StudyTourJogja />} />
      <Route path='/studytour-bali' element={<StudyTourBali />} />
      <Route path='/studytour-malang' element={<StudyTourMalang />} />
      <Route path='/studytour-dieng' element={<StudyTourDieng />} />
      <Route path='/studytour-semarang' element={<StudyTourSemarang />} />
      <Route path='/studytour-tegal' element={<StudyTourTegal />} />
      <Route path='/studytour-pangandaran' element={<StudyTourPangandaran />} />
      <Route path='/studytour-cirebon' element={<StudyTourCirebon />} />
      <Route path='/studytour-garut' element={<StudyTourGarut />} />
      <Route path='/outbound' element={<Outbound />} />
      <Route path='/sewa-armada' element={<SewaArmada />} />
      <Route path='/custom-trip' element={<CustomTrip />} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarBaru />
      <div className="app-content">
        <App />
      </div>
      <WhatsappFloat/>
      <Footer />
      {/* <FooterMobile /> */}
    </Router>
  );
}

export default AppWrapper;
