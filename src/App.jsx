import { useState } from "react";

import "./assets/styles/global/_global.scss";
import HeartImg from "./assets/images/heart-outline.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-dark" style={{backgroundColor:'black'}}>
      <h1 className="heading">This is Heading</h1>
      <h1 className="title">This is Title</h1>
      <h1 className="description">This is description</h1>
      <button className="btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M17.0436 3.75C14.0005 3.75 12.5005 6.75 12.5005 6.75C12.5005 6.75 11.0005 3.75 7.95735 3.75C5.48423 3.75 3.52579 5.81906 3.50048 8.28797C3.44892 13.4128 7.56595 17.0573 12.0786 20.1202C12.203 20.2048 12.35 20.2501 12.5005 20.2501C12.651 20.2501 12.7979 20.2048 12.9224 20.1202C17.4345 17.0573 21.5516 13.4128 21.5005 8.28797C21.4752 5.81906 19.5167 3.75 17.0436 3.75Z"
            stroke="#3B72FF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Add to Wishlist
      </button>

      <button className="btn-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M17.0436 3.75C14.0005 3.75 12.5005 6.75 12.5005 6.75C12.5005 6.75 11.0005 3.75 7.95735 3.75C5.48423 3.75 3.52579 5.81906 3.50048 8.28797C3.44892 13.4128 7.56595 17.0573 12.0786 20.1202C12.203 20.2048 12.35 20.2501 12.5005 20.2501C12.651 20.2501 12.7979 20.2048 12.9224 20.1202C17.4345 17.0573 21.5516 13.4128 21.5005 8.28797C21.4752 5.81906 19.5167 3.75 17.0436 3.75Z"
            stroke="#3B72FF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Add to Wishlist
      </button>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
