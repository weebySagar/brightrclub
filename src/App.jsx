import "./assets/styles/global/_global.scss";
import HeartImg from "./assets/images/heart-outline.svg";
import Navbar from "./components/navbar/Navbar";
import NewArrival from "./components/new arrival/NewArrival";
import AgeGroup from "@components/age group/AgeGroup";
import TopBooks from "@components/top books/TopBooks";
import PopularSeries from "@components/popular series/PopularSeries";
import Books from "@components/books/Books";
import bestSellers from "./data/bestSellers";
import newArrivalData from "./data/newArrivalData";
import peppaPigData from "./data/peppaPigData";
import BooksWrapper from "@components/books wrapper/BooksWrapper";
import Footer from "@components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <NewArrival />
        <AgeGroup/>
        <TopBooks/>
        <PopularSeries/>
        <BooksWrapper/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
