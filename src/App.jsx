import "./assets/styles/global/_global.scss";
import HeartImg from "./assets/images/heart-outline.svg";
import Navbar from "./components/navbar/Navbar";
import NewArrival from "./components/new arrival/NewArrival";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <NewArrival />
      </div>
    </div>
  );
}

export default App;
