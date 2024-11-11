import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Events from "./pages/events.jsx";
import Mou from "./pages/mou.jsx";
import Scholarship from "./pages/scholarship.jsx";
import Internship from "./pages/internship.jsx";
import Team from "./pages/team.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Testimonials from './pages/testimonials.jsx';
import Faq from './pages/faq.jsx';



function App() {

    return (
      <>
        <Header />
        <div className="mx-auto overflow-hidden min-h-screen scroll-smooth">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/mou" element={<Mou />} />
            <Route path="/scholarships" element={<Scholarship />} />
            <Route path="/internships" element={<Internship />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
}

export default App
