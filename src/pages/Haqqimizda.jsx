import Achievements from "../components/Achievment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OurTeam from "../components/OurTeam";
import '../css/aboutresponsive.css'

function Haqqimizda() {
  return (
    <div>
      <Navbar></Navbar>
      <Achievements></Achievements>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </div>
  );
}

export default Haqqimizda;
