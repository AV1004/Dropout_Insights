import React from "react";

export default function LanguageButton() {
  return (
    <button className="flex float-right text-2xl relative -left-28 top-2 text-[#267DFF] font-medium">
      EN
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="29"
        viewBox="0 0 32 29"
        fill="none"
        className="mt-[10px] h-4"
      >
        <path
          d="M29.5273 0.0410767H15.2879H2.46564C0.271466 0.0410767 -0.825624 4.2993 0.728586 6.79555L12.5681 25.8107C14.4651 28.8576 17.5507 28.8576 19.4477 25.8107L23.9504 18.5791L31.2872 6.79555C32.8185 4.2993 31.7214 0.0410767 29.5273 0.0410767Z"
          fill="#267DFF"
        />
      </svg>
    </button>
  );
}
