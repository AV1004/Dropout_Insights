import React from "react";

export default function Register(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      className={`bg-[${props.changeBG}] h-6 mr-4 mt-1`}
    >
      <path
        d="M15.2214 1.39696H12.0611C4.1603 1.39696 1 4.55727 1 12.458V21.9389C1 29.8397 4.1603 33 12.0611 33H21.542C29.4427 33 32.603 29.8397 32.603 21.9389V18.7786"
        stroke={props.color === "#DBE7FD" ? "#FEFEFE" : props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.1853 3.00874L10.7337 15.4603C10.2597 15.9344 9.78563 16.8667 9.69082 17.5461L9.01135 22.3024C8.75853 24.0247 9.97524 25.2257 11.6976 24.9886L16.4539 24.3092C17.1175 24.2144 18.0498 23.7403 18.5397 23.2663L30.9913 10.8147C33.1403 8.66568 34.1516 6.16904 30.9913 3.00874C27.831 -0.151568 25.3343 0.859729 23.1853 3.00874Z"
        stroke={props.color === "#DBE7FD" ? "#FEFEFE" : props.color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3997 4.79414C22.4584 8.5707 25.4133 11.5256 29.2057 12.6001"
        stroke={props.color === "#DBE7FD" ? "#FEFEFE" : props.color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
