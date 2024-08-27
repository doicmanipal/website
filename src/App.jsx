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
import Hero from "./components/hero.jsx";

function App() {

    return (<>
            <Header/>
            <Hero />
            <div className='max-w-7xl mx-auto overflow-hidden min-h-screen px-2'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/mou" element={<Mou/>}/>
                    <Route path="/scholarships" element={<Scholarship/>}/>
                    <Route path="/internships" element={<Internship/>}/>
                    <Route path="/team" element={<Team/>}/>
                </Routes>
            </div>
            <Footer/>
        </>)
}

export default App
