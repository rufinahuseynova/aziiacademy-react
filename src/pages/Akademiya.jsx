import Categories from "../components/Categories";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PopularCourses from "../components/PopularCourses";
import Faq from "../components/Faq";
import Feedbacks from "../components/Feedbacks";
import Footer from "../components/Footer";
import '../css/academyresponsive.css'
function Akademiya() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Categories></Categories>
      <PopularCourses></PopularCourses>
      <Faq></Faq>
      <Feedbacks></Feedbacks>
      <Footer></Footer>
    </div>
  );
}

export default Akademiya;
