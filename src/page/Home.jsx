import React from "react";
// import Navbar from "../components/Navbar";
import fuel from "../assets/refuel.png";
import shadow from "../assets/shadow.png";
import telegramblack from "../assets/blacktelegram.png";
import img from "../assets/blockchains/botxcoin.png";
import img2 from "../assets/blockchains/celodolar.png";
import img3 from "../assets/blockchains/chainlink.png";
import img4 from "../assets/blockchains/ethereum.png";
import img5 from "../assets/blockchains/bitcoin.png";
import img6 from "../assets/blockchains/feiprotocol.png";
import img7 from "../assets/blockchains/mixing.png";
import img8 from "../assets/blockchains/shiba.png";
import img9 from "../assets/blockchains/solana.png";
import img10 from "../assets/blockchains/tether.png";
import img11 from "../assets/blockchains/tron.png";
import img12 from "../assets/blockchains/xrp.png";
import f1 from "../assets/features/one.png";
import f2 from "../assets/features/two.png";
import f3 from "../assets/features/three.png";
import f4 from "../assets/features/four.png";
import iphone from "../assets/iphone.png";
import quote from "../assets/quote.png";
import human from "../assets/image.png";
import telegramblue from "../assets/telegram.png";
import telegramblue2 from "../assets/telegram2.png";
import logo from "../assets/logo.png";
import social1 from "../assets/socialsicon/github.png";
import social2 from "../assets/socialsicon/telegram.png";
import social3 from "../assets/socialsicon/twitter.png";

const Home = () => {
  const data = [
    {
      pathname: img6,
    },
    {
      pathname: img5,
    },
    {
      pathname: img4,
    },
    {
      pathname: img10,
    },
    {
      pathname: img12,
    },
    {
      pathname: img,
    },
    {
      pathname: img9,
    },
    {
      pathname: img3,
    },
    {
      pathname: img11,
    },
    {
      pathname: img8,
    },
    {
      pathname: img2,
    },

    {
      pathname: img7,
    },
  ];

  const dataFeatures = [
    {
      pathname: f1,
      text1: "Emergency Funds",
      text2:
        "Securely store gas funds for quick access across various blockchains.",
    },
    {
      pathname: f2,
      text1: "Quick Refueling",
      text2: "No need for external exchanges like Binance or Bybit.",
    },
    {
      pathname: f3,
      text1: "Easy to Use",
      text2: "Simple steps to keep your wallet fueled.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
  ];

  const data2 = [
    {
      text1: "Store Funds",
      text2: "Deposit a small amount of funds for emergencies.",
    },
    {
      text1: "Trade Freely",
      text2: "Swap and trade your tokens without interruption.",
    },
    {
      text1: "Refuel Instantly",
      text2: "Top up your gas fees directly from the bot when needed.",
    },
  ];

  const dataTestimonials = [
    {
      pathname: f1,
      text1: "Emergency Funds",
      text2:
        "Securely store gas funds for quick access across various blockchains.",
    },
    {
      pathname: f2,
      text1: "Quick Refueling",
      text2: "No need for external exchanges like Binance or Bybit.",
    },
    {
      pathname: f3,
      text1: "Easy to Use",
      text2: "Simple steps to keep your wallet fueled.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
  ];

  // return (
  //   <div>
  //     <Navbar />
  //     <div className="pt-[196px] ml-[100px] h-[100vh] relative overflow-hidden">
  //       <div className="absolute right-0 bottom-0">
  //         <img src={fuel} alt="" className="" />
  //       </div>
  //       <div className="absolute left-0 top-0">
  //         <img src={shadow} alt="" className="" />
  //       </div>
  //       <p className="text-[86.5px]">Never run out of gas</p>
  //       <p className="pt-[30px] text-xl">
  //         Top up your gas fees anytime, anywhere with and keep your crypto
  //         operations running <br /> smoothly. Store funds and refuel instantly
  //         with our telegram Bot
  //       </p>
  //       <div className="flex mt-[30px]">
  //         <div className="yellow_btn mr-[37px]">
  //           <p className="">Get Started</p>
  //         </div>
  //         <div className="white_btn flex justify-center items-center">
  //           <p className="mr-4">Get Started</p>
  //           <img src={telegramblack} alt="" className="w-[21.39px] h-[22px]" />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="py-[101px] px-[84px]">
  //       <p className="text-center pb-[43px] text-[20px]">
  //         Compatible with a wide range of digital assets and cryptocurrencies
  //       </p>
  //       <div className="flex justify-center">
  //         {data.slice(0, 6).map((val, i) => (
  //           <div
  //             className={`flex mb-[14px] justify-center items-center pr-[16px]
  //               ml-[${i == 0 ? "21px" : "0px"}]`}
  //           >
  //             <img
  //               src={`${val.pathname}`}
  //               alt=""
  //               className={`bg-[#F4F4F4] py-[16px] px-[30px] rounded-[220px]`}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //       <div className="flex justify-center">
  //         {data.slice(6, 12).map((val, i) => (
  //           <div
  //             className={`flex mb-[14px] justify-center items-center pr-[16px] `}
  //           >
  //             <img
  //               src={`${val.pathname}`}
  //               alt=""
  //               className={`bg-[#F4F4F4] py-[16px] px-[33px] rounded-[220px]`}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //     <div className="grid grid-cols-2 bg-[#060806] text-[#fff] pt-[175px] px-[120px] pb-[131px]">
  //       <div>
  //         <p className="font-[590] text-[60.71px]">How it works</p>
  //         <p className="text-[18px]">
  //           Step by Step guide on how to use the telegram bot
  //         </p>
  //         <img src={iphone} alt="" className="pt-[105px]" />
  //       </div>
  //       <div className="">
  //         {data2.map((val, i) => (
  //           <div className="flex items-center m-[66.67px] relative">
  //             <div className={`${i != 2 ? "line line1" : ""}`}></div>
  //             <div className={`${i != 2 ? "line line2" : ""}`}></div>
  //             <div className={`${i != 2 ? "line line3" : ""}`}></div>
  //             <div className={`${i != 2 ? "line line4" : ""}`}></div>
  //             <div className={`${i != 2 ? "line line5" : ""}`}></div>
  //             <div className={`${i != 2 ? "line line5" : ""}`}></div>
  //             <div className={`${i != 2 ? "line line6" : ""}`}></div>
  //             <div className={`${i != 2 ? "line line7" : ""}`}></div>
  //             <div className={`${i != 2 ? "line line8" : ""}`}></div>
  //             <div className={`${i != 2 ? "line line9" : ""}`}></div>

  //             <div className="circle bg-[#F2A700] w-[94.24px] h-[94.24px] flex justify-center items-center mr-[66px]">
  //               <p className="text-[40.34px] font-[700]">{i + 1}</p>
  //             </div>
  //             <div className="w-[366px] h-[312px] flex flex-col justify-center align-center text-center border">
  //               <p className="text-[34.87px]">{val.text1}</p>
  //               <p className="text-[16px]">{val.text2}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //     <div className="pt-[163px] pb-[243px] px-[129px] ">
  //       <p className="text-center text-[60.71px] font-[590] mb-[105px]">
  //         Features
  //       </p>
  //       <div className="grid grid-cols-2 gap-[32px]">
  //         {dataFeatures.map((val) => (
  //           <div className="flex bg-[#061417] h-[278px] border2 px-[66px] py-[83px]">
  //             <div className="bg-[#F2A700] rounded-full w-[89px] h-[89px] flex items-center justify-center mr-[27px]">
  //               <img src={val.pathname} alt="" />
  //             </div>
  //             <div>
  //               <p className="text-white text-[34.87px]">{val.text1}</p>
  //               <p className="text-white ">{val.text2}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //     <div className={` w-[auto] overflow-x-scroll`}>
  //       <p className="text-[60.71px] font-[590] text-center">Testimonials</p>
  //       <p className="text-[18px] font-[400 text-center">
  //         Reviews from users who have benefited from using the Refuel Bot.
  //       </p>
  //       {/* <marquee width={window.innerWidth} direction="left" height="auto"> */}
  //       <div
  //         className={`grid grid-cols-4 gap-x-20 mt-[107px] w-[${"600px"}] overflow-x-hidden`}
  //       >
  //         {dataTestimonials.map((val, i) => (
  //           <div
  //             key={i}
  //             className={`border3 pl-[24px] pr-[26px] pt-[41px] pb-[24px] mb-[24px] min-w-[377px]
  //               ${
  //                 i + 1 > Math.round(dataTestimonials.length / 2)
  //                   ? "ml-[50%]"
  //                   : ""
  //               }
  //               `}
  //           >
  //             <img src={quote} alt="" className="pb-[16px]" />
  //             <p className="">
  //               Refuel Bot has been a lifesaver! I can trade without worrying
  //               about gas fees interrupting my strategy.
  //             </p>
  //             <div className="flex mt-[44px] justify-center items-center">
  //               <img src={human} alt="" />
  //               <div className="ml-[24px]">
  //                 <p>John Doe</p>
  //                 <p>CEO at FinTech Solutions</p>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       {/* </marquee> */}
  //     </div>
  //     <div className="pt-[243px] mb-[203px]">
  //       <div className="bg-[#060806] rounded-[20px] relative mx-[61px] pt-[150px] pb-[100px] flex flex-col items-center justify-center">
  //         <img
  //           src={telegramblue}
  //           alt=""
  //           className="absolute left-[90px] bottom-[-10px]"
  //         />
  //         <img
  //           src={telegramblue2}
  //           alt=""
  //           className="absolute right-0 top-[-0px]"
  //         />
  //         <p className="text-white text-[60.71px] font-[590]">
  //           Try Refuel Bot Now
  //         </p>
  //         <p
  //           className="text-white text-[18px] text-center pt-[27px] pb-[30px]"
  //           style={{ lineHeight: "30px", letterSpacing: "1.5px" }}
  //         >
  //           Get started now and keep your crypto journey moving forward without{" "}
  //           <br />
  //           interruption. Download the telegram bot to get started
  //         </p>
  //         <button className="bg-[#F2A700] text-white py-[20px] px-[50px]">
  //           Download Telegram Bot
  //         </button>
  //       </div>
  //     </div>
  //     <div className="footer grid grid-cols-3 items-center pb-[91px] px-[101px]">
  //       <div>
  //         <img src={logo} alt="" />
  //       </div>
  //       <div className="grid grid-cols-4">
  //         <p className="font-[500]">About</p>
  //         <p className="font-[500]">Help Centre</p>
  //         <p className="font-[500]">Privacy</p>
  //         <p className="font-[500]">Terms</p>
  //       </div>
  //       <div className="flex justify-center">
  //         <img src={social1} alt="" className="px-[10px]" />
  //         <img src={social2} alt="" className="px-[10px]" />
  //         <img src={social3} alt="" className="px-[10px]" />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <>
      {/* <Navbar /> */}
    <div className="min-h-screen flex flex-col w-full">
      <div className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="absolute right-0 bottom-0 max-w-full">
          <img src={fuel} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-0 top-0 max-w-full">
          <img src={shadow} alt="" className="w-full h-auto" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-[86.5px] font-bold leading-tight mb-6">
            Never run out of gas
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Top up your gas fees anytime, anywhere and keep your crypto
            operations running smoothly. Store funds and refuel instantly with
            our telegram Bot
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="yellow_btn w-full sm:w-auto">Get Started</button>
            <button className="white_btn w-full sm:w-auto flex justify-center items-center">
              <span className="mr-2">Get Started</span>
              <img src={telegramblack} alt="" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg mb-8">
          Compatible with a wide range of digital assets and cryptocurrencies
        </p>

        {/* imported  */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          {data.map((val, i) => (
            <div key={i} className={`flex mb-[14px] justify-center items-center pr-[16px] 
            ml-[${i == 0 ? "21px" : "0px"}]`}>
              <img
                src={val.pathname}
                alt=""
                className="bg-[#F4F4F4] p-4 rounded-full sm:px-4 px-8 h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* original  */}
        {/* <div className="flex justify-center">
          {data.slice(0, 6).map((val, i) => (
            <div
              className={`flex mb-[14px] justify-center items-center pr-[16px] 
                ml-[${i == 0 ? "21px" : "0px"}]`}
            >
              <img
                src={`${val.pathname}`}
                alt=""
                className={`bg-[#F4F4F4] py-[16px] px-[30px] rounded-[220px]`}
              />
            </div>
          ))}
        </div> */}
      </div>

        {/* imported  */}
      <div className="background-gradient text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
                How it works
              </h2>
              <p className="text-lg mb-8">
                Step by Step guide on how to use the telegram bot
              </p>
              <img src={iphone} alt="" className="max-w-full h-auto" />
            </div>
            <div className="space-y-8">
              {data2.map((val, i) => (
                // <div key={i} className="flex items-start">
                //   <div className="bg-[#F2A700] w-16 h-16 flex-shrink-0 rounded-full flex justify-center items-center mr-4">
                //     <p className="text-2xl font-bold">{i + 1}</p>
                //   </div>
                //   <div className="border border-white p-4 flex-grow">
                //     <p className="text-xl font-semibold mb-2">{val.text1}</p>
                //     <p>{val.text2}</p>
                //   </div>
                // </div>
                <div className="flex items-center relative">
             <div className={`${i != 2 ? "line line1" : ""}`}></div>
             <div className={`${i != 2 ? "line line2" : ""}`}></div>
             <div className={`${i != 2 ? "line line3" : ""}`}></div>
             <div className={`${i != 2 ? "line line4" : ""}`}></div>
             <div className={`${i != 2 ? "line line5" : ""}`}></div>
             <div className={`${i != 2 ? "line line5" : ""}`}></div>
             <div className={`${i != 2 ? "line line6" : ""}`}></div>
             <div className={`${i != 2 ? "line line7" : ""}`}></div>
             {/* <div className={`${i != 2 ? "line line8" : ""}`}></div> */}
             {/* <div className={`${i != 2 ? "line line9" : ""}`}></div> */}

             <div className="circle bg-[#F2A700] w-[54px] h-[54px] flex justify-center items-center mr-[66px]">
               <p className="text-[20.34px] font-[700]">{i + 1}</p>
             </div>
             <div className=" h-[212px] flex flex-col justify-center align-center text-center border">
               <p className="text-[34.87px]">{val.text1}</p>
               <p className="text-[16px] p-5">{val.text2}</p>
             </div>
           </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* original  */}
      {/* <div className="grid grid-cols-2 bg-[#060806] text-[#fff] pt-[175px] px-[120px] pb-[131px]">
       <div>
         <p className="font-[590] text-[60.71px]">How it works</p>
         <p className="text-[18px]">
           Step by Step guide on how to use the telegram bot
         </p>
         <img src={iphone} alt="" className="pt-[105px]" />
       </div>
       <div className="">
         {data2.map((val, i) => (
           <div className="flex items-center m-[66.67px] relative">
             <div className={`${i != 2 ? "line line1" : ""}`}></div>
             <div className={`${i != 2 ? "line line2" : ""}`}></div>
             <div className={`${i != 2 ? "line line3" : ""}`}></div>
             <div className={`${i != 2 ? "line line4" : ""}`}></div>
             <div className={`${i != 2 ? "line line5" : ""}`}></div>
             <div className={`${i != 2 ? "line line5" : ""}`}></div>
             <div className={`${i != 2 ? "line line6" : ""}`}></div>
             <div className={`${i != 2 ? "line line7" : ""}`}></div>
             <div className={`${i != 2 ? "line line8" : ""}`}></div>
             <div className={`${i != 2 ? "line line9" : ""}`}></div>

             <div className="circle bg-[#F2A700] w-[94.24px] h-[94.24px] flex justify-center items-center mr-[66px]">
               <p className="text-[40.34px] font-[700]">{i + 1}</p>
             </div>
             <div className="w-[366px] h-[312px] flex flex-col justify-center align-center text-center border">
               <p className="text-[34.87px]">{val.text1}</p>
               <p className="text-[16px]">{val.text2}</p>
             </div>
           </div>
         ))}
       </div>
     </div> */}

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-12">
          Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {dataFeatures.map((val, i) => (
            <div
              key={i}
              className="bg-[#061417] p-6 rounded-lg flex items-start"
            >
              <div className="bg-[#F2A700] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center mr-4">
                <img src={val.pathname} alt="" className="w-8 h-8" />
              </div>
              <div>
                <p className="text-white text-2xl font-semibold mb-2">
                  {val.text1}
                </p>
                <p className="text-white">{val.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* imported  */}
      {/* <div className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-4">Testimonials</h2>
        <p className="text-lg text-center mb-12">
          Reviews from users who have benefited from using the Refuel Bot.
        </p>
        <div className="flex overflow-x-auto pb-4 space-x-6">
          {dataTestimonials.map((val, i) => (
            <div key={i} className="flex-shrink-0 w-80 border p-6 rounded-lg">
              <img src={quote} alt="" className="mb-4" />
              <p className="mb-6">
                Refuel Bot has been a lifesaver! I can trade without worrying about gas fees interrupting my strategy.
              </p>
              <div className="flex items-center">
                <img src={human} alt="" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm">CEO at FinTech Solutions</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* original  */}
       <div className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <p className="text-[60.71px] font-[590] text-center">Testimonials</p>
        <p className="text-[18px] font-[400 text-center">
          Reviews from users who have benefited from using the Refuel Bot.
        </p>
        
        <div className="flex overflow-x-auto pb-4 space-x-6 my-6">
          {dataTestimonials.map((val, i) => (
            <div key={i} className="flex-shrink-0 w-80 border3 p-6 rounded-lg">
              <img src={quote} alt="" className="mb-4" />
              <p className="mb-6">
                Refuel Bot has been a lifesaver! I can trade without worrying about gas fees interrupting my strategy.
              </p>
              <div className="flex items-center">
                <img src={human} alt="" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm">CEO at FinTech Solutions</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

            {/* imported  */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#060806] rounded-lg relative p-8 sm:p-16 flex flex-col items-center justify-center text-center">
          <img
            src={telegramblue}
            alt=""
            className="absolute left-0 bottom-0 w-24 sm:w-36 h-auto"
          />
          <img
            src={telegramblue2}
            alt=""
            className="absolute right-0 top-0 w-24 sm:w-48 h-auto"
          />
          <h2 className="text-white text-4xl sm:text-5xl font-semibold mb-6">
            Try Refuel Bot Now
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Get started now and keep your crypto journey moving forward without
            interruption. Download the telegram bot to get started
          </p>
          <button className="bg-[#F2A700] text-white py-3 px-8 rounded-lg text-lg font-semibold">
            Download Telegram Bot
          </button>
        </div>
      </div>

      {/* original  */}
          {/* <div className="pt-[243px] mb-[203px]">
        <div className="bg-[#060806] rounded-[20px] relative mx-[61px] pt-[150px] pb-[100px] flex flex-col items-center justify-center">
          <img
            src={telegramblue}
            alt=""
            className="absolute left-[90px] bottom-[-10px]"
          />
          <img
            src={telegramblue2}
            alt=""
            className="absolute right-0 top-[-0px]"
          />
          <p className="text-white text-[60.71px] font-[590]">
            Try Refuel Bot Now
          </p>
          <p
            className="text-white text-[18px] text-center pt-[27px] pb-[30px]"
            style={{ lineHeight: "30px", letterSpacing: "1.5px" }}
          >
            Get started now and keep your crypto journey moving forward without{" "}
            <br />
            interruption. Download the telegram bot to get started
          </p>
          <button className="bg-[#F2A700] text-white py-[20px] px-[50px]">
            Download Telegram Bot
          </button>
        </div>
      </div> */}

      <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="font-medium">
              About
            </a>
            <a href="#" className="font-medium">
              Help Centre
            </a>
            <a href="#" className="font-medium">
              Privacy
            </a>
            <a href="#" className="font-medium">
              Terms
            </a>
          </div>
          <div className="flex space-x-4">
            <img src={social1} alt="" className="w-6 h-6" />
            <img src={social2} alt="" className="w-6 h-6" />
            <img src={social3} alt="" className="w-6 h-6" />
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Home;
