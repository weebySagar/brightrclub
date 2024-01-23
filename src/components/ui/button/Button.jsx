import React from "react";

const Button = ({ variant, text }) => {
  return (
    <button className={`btn-${variant}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          d="M15.0124 1.75C11.9692 1.75 10.4692 4.75 10.4692 4.75C10.4692 4.75 8.96923 1.75 5.9261 1.75C3.45298 1.75 1.49454 3.81906 1.46923 6.28797C1.41767 11.4128 5.5347 15.0573 10.0474 18.1202C10.1718 18.2048 10.3188 18.2501 10.4692 18.2501C10.6197 18.2501 10.7667 18.2048 10.8911 18.1202C15.4033 15.0573 19.5203 11.4128 19.4692 6.28797C19.4439 3.81906 17.4855 1.75 15.0124 1.75Z"
          stroke="#3B72FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {text}
    </button>
  );
};

export default Button;
