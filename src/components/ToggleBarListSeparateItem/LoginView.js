import React from "react";
import LogIn from "../Images/Login.jpg";

export default function LoginView(props) {
  return (
    <div className=" h-[30rem] w-[56rem] grid rounded-[2rem] shadow-2xl absolute left-80 top-[7.5rem]  text-center  grid-cols-2">
      <button
        onClick={() => {
          props.backToHome("Dashboard");
        }}
        className="h-[23px] absolute flex w-20 mt-4 ml-8 font-semibold "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="18"
          viewBox="0 0 9 18"
          fill="none"
          className=" bg-transparent mr-[10px] mt-[3px] cursor-pointer"
        >
          <path
            d="M8.00011 17.67C7.81011 17.67 7.62011 17.6 7.47011 17.45L0.950113 10.93C0.440819 10.4168 0.155029 9.72306 0.155029 9.00002C0.155029 8.27698 0.440819 7.58325 0.950113 7.07002L7.47011 0.55002C7.76011 0.26002 8.24011 0.26002 8.53011 0.55002C8.82011 0.84002 8.82011 1.32002 8.53011 1.61002L2.01011 8.13002C1.53011 8.61002 1.53011 9.39002 2.01011 9.87002L8.53011 16.39C8.82011 16.68 8.82011 17.16 8.53011 17.45C8.38011 17.59 8.19011 17.67 8.00011 17.67Z"
            fill="black"
          />
        </svg>
        Home
      </button>
      <img
        src={LogIn}
        alt="Login"
        className="bg-[#C8DBFF] rounded-tl-3xl rounded-bl-3xl h-full "
      ></img>

      <div className="flex bg-[#C8DBFF] flex-col justify-center rounded-tr-3xl items-center rounded-[0 31px 31px 0]">
        <form className=" flex flex-col bg-[#C8DBFF] rounded-br-3x">
          <h1 className="bg-[#C8DBFF] text-4xl font-semibold bottom-[4rem] relative   ">
            Log In
          </h1>
          <div className="flex  bg-[#C8DBFF] mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              className="bg-[#267DFF] p-3 w-12 h-12 rounded-l-xl"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.833 0C25.029 0 26.0001 0.9698 26.0001 2.1671V17.3329C26.0001 18.5289 25.0303 19.5 23.833 19.5H2.16722C0.971222 19.5 0.00012207 18.5302 0.00012207 17.3329V2.1671C0.00012207 0.9711 0.969922 0 2.16722 0H23.833ZM9.31852 11.4764L2.93552 17.784H22.858L16.5439 11.5414L13.0001 13.9945L9.31852 11.4764ZM24.2321 6.2296L17.9973 10.5404L24.2321 16.6972V6.2296ZM1.76942 6.3089V16.4957L7.86122 10.4754L1.76942 6.3089ZM23.8122 1.7173H2.20752C2.08889 1.71174 1.97262 1.75173 1.88252 1.8291C1.84249 1.86495 1.81158 1.90984 1.79236 1.96003C1.77314 2.01022 1.76617 2.06427 1.77202 2.1177V4.2237L13.0001 11.9028L24.2373 4.1483V2.2087C24.2386 2.0345 24.1983 1.9084 24.1177 1.8291C24.0777 1.79016 24.0299 1.76008 23.9775 1.74082C23.9251 1.72155 23.8692 1.71354 23.8135 1.7173H23.8122Z"
                fill="#FEFEFE"
              />
            </svg>
            <input
              className="bg-white w-72 rounded-r-xl p-3"
              type="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="flex bg-[#C8DBFF] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="31"
              viewBox="0 0 26 31"
              className="bg-[#267DFF] p-3 w-12 h-12 rounded-l-xl "
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.83721 9.49856V11.3167C4.5627 11.339 4.30512 11.3669 4.06084 11.406C2.97246 11.5734 2.05581 11.9362 1.32781 12.7748C0.599814 13.6148 0.287814 14.6725 0.141488 15.9283C-1.802e-08 17.1381 0 18.6772 0 20.5846V20.7381C0 22.6455 -1.802e-08 24.1846 0.141488 25.3944C0.286605 26.6502 0.601023 27.7079 1.32781 28.5479C2.05581 29.3879 2.97246 29.7479 4.06084 29.9181C5.1093 30.08 6.44316 30.08 8.09628 30.08H17.9037C19.5568 30.08 20.8907 30.08 21.9392 29.9181C23.0275 29.7479 23.9442 29.3879 24.6722 28.5479C25.4002 27.7079 25.7122 26.6502 25.8597 25.3944C26 24.1846 26 22.6455 26 20.7381V20.5846C26 18.6772 26 17.1381 25.8597 15.9283C25.7122 14.6725 25.4002 13.6148 24.6722 12.7748C23.9442 11.9348 23.0275 11.5748 21.9392 11.406C21.6813 11.3668 21.4223 11.337 21.1628 11.3167V9.49856C21.1628 7.00059 20.3028 4.60493 18.772 2.8386C17.2411 1.07227 15.1649 0.0799561 13 0.0799561C10.8351 0.0799561 8.75886 1.07227 7.22804 2.8386C5.69722 4.60493 4.83721 7.00059 4.83721 9.49856ZM13 2.17298C11.3162 2.17298 9.70133 2.94478 8.51069 4.31859C7.32006 5.6924 6.65116 7.5557 6.65116 9.49856V11.2469C7.10223 11.2427 7.58474 11.2427 8.09628 11.2427H17.9037C18.4153 11.2427 18.8978 11.2427 19.3488 11.2469V9.49856C19.3488 5.45205 16.507 2.17298 13 2.17298ZM4.3027 13.4795C3.41507 13.6176 2.94586 13.8702 2.61088 14.2553C2.27591 14.6418 2.05823 15.1832 1.93851 16.2088C1.81637 17.2623 1.81395 18.659 1.81395 20.6614C1.81395 22.6637 1.81637 24.0604 1.93851 25.1153C2.05823 26.1395 2.27712 26.6809 2.61088 27.0674C2.94586 27.4539 3.41507 27.7051 4.30391 27.8432C5.21572 27.9841 6.42744 27.9869 8.16279 27.9869H17.8372C19.5726 27.9869 20.7831 27.9841 21.6973 27.8432C22.5849 27.7051 23.0541 27.4525 23.3891 27.0674C23.7241 26.6809 23.9418 26.1395 24.0615 25.1139C24.1836 24.0604 24.186 22.6637 24.186 20.6614C24.186 18.659 24.1836 17.2609 24.0615 16.2074C23.9418 15.1832 23.7229 14.6418 23.3891 14.2553C23.0541 13.8688 22.5849 13.6176 21.6961 13.4795C20.7831 13.3386 19.5726 13.3358 17.8372 13.3358H8.16279C6.42744 13.3358 5.21572 13.3386 4.3027 13.4795Z"
                fill="#FEFEFE"
              />
              <path
                d="M9.3721 21.4738C9.3721 21.8439 9.24469 22.1988 9.0179 22.4605C8.79111 22.7222 8.48352 22.8692 8.16279 22.8692C7.84207 22.8692 7.53448 22.7222 7.30769 22.4605C7.0809 22.1988 6.95349 21.8439 6.95349 21.4738C6.95349 21.1038 7.0809 20.7489 7.30769 20.4872C7.53448 20.2255 7.84207 20.0785 8.16279 20.0785C8.48352 20.0785 8.79111 20.2255 9.0179 20.4872C9.24469 20.7489 9.3721 21.1038 9.3721 21.4738ZM14.2093 21.4738C14.2093 21.8439 14.0819 22.1988 13.8551 22.4605C13.6283 22.7222 13.3207 22.8692 13 22.8692C12.6793 22.8692 12.3717 22.7222 12.1449 22.4605C11.9181 22.1988 11.7907 21.8439 11.7907 21.4738C11.7907 21.1038 11.9181 20.7489 12.1449 20.4872C12.3717 20.2255 12.6793 20.0785 13 20.0785C13.3207 20.0785 13.6283 20.2255 13.8551 20.4872C14.0819 20.7489 14.2093 21.1038 14.2093 21.4738ZM17.8372 22.8692C18.1579 22.8692 18.4655 22.7222 18.6923 22.4605C18.9191 22.1988 19.0465 21.8439 19.0465 21.4738C19.0465 21.1038 18.9191 20.7489 18.6923 20.4872C18.4655 20.2255 18.1579 20.0785 17.8372 20.0785C17.5165 20.0785 17.2089 20.2255 16.9821 20.4872C16.7553 20.7489 16.6279 21.1038 16.6279 21.4738C16.6279 21.8439 16.7553 22.1988 16.9821 22.4605C17.2089 22.7222 17.5165 22.8692 17.8372 22.8692Z"
                fill="#FEFEFE"
              />
            </svg>
            <input
              className="bg-white w-72 rounded-r-xl p-3 "
              type="password"
              placeholder="Enter Your Password"
              autoComplete="on"
              required
            />
          </div>

          <span className="bg-[#C8DBFF] cursor-pointer text-[#267DFF] font-thin hover:underline relative flex-row-reverse flex mt-3  ">
            Forgot Password?
          </span>
          <div className="bg-transparent flex justify-center ">
            <button
              type="submit"
              className="p-3 bg-[#267DFF] w-36 rounded-2xl  text-white top-8 relative hover:bg-transparent hover:border-solid border-2 border-blue-600 hover:text-[#267DFF]"
            >
              {" "}
              LogIn
            </button>
          </div>
          <span className=" bg-[#C8DBFF] cursor-pointer font-thin relative top-14 hover:underline text-[#267DFF]">
            Create an Account?
          </span>
        </form>
      </div>
    </div>
  );
}
