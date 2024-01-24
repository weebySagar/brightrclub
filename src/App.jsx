import "./assets/styles/global/_global.scss";
import HeartImg from "./assets/images/heart-outline.svg";
import Navbar from "./components/navbar/Navbar";
import NewArrival from "./components/new arrival/NewArrival";
import AgeGroup from "@components/age group/AgeGroup";
import TopBooks from "@components/top books/TopBooks";
import PopularSeries from "@components/popular series/PopularSeries";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <NewArrival />
        <AgeGroup/>
        <TopBooks/>
        <PopularSeries/>
      </div>
    </div>
  );
}

export default App;
