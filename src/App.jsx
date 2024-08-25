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
import ProgressBar from "react-scroll-progress-bar";

function App() {

  return (
    <>
        <ProgressBar height="8" bgcolor="#F43059" duration="0.2" />
        <Header />
          <div className='max-w-7xl mx-auto '>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/mou" element={<Mou />} />
                  <Route path="/scholarship" element={<Scholarship />} />
                  <Route path="/internship" element={<Internship />} />
                  <Route path="/team" element={<Team />} />
              </Routes>
          </div>
        <Footer />
    </>
  )
}

export default App
