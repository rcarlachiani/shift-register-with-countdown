import Router from "next/router";
import React, { useEffect } from "react";
import Countdown from "react-countdown";
import GeneroToken from "./Cookies";

const Renderer = ({ days, hours, minutes, seconds, completed, url }) => {
  useEffect(() => {
    if (completed) {
      Router.push(url);
    }
  }, [completed, url]);

  return (
    <div className="flex  flex-col mt-4 md:mt-8 xl:mt-8 md:mt-9 xl:mt-9 space-y-4 md:mt-0 md:flex-row md:space-y-0 md:space-x-8">
      <Circle label="DÍAS" value={days} max={365} />
      <Circle label="HORAS" value={hours} max={24} />
      <Circle label="MINUTOS" value={minutes} max={60} />
      <Circle label="SEGUNDOS" value={seconds} max={60} />
    </div>
  );
};

const Circle = ({ label, value, max }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="px-8 py-4 text-center bg-opacity-75 rounded-xl md:px-5 bg-clockBackground ">
      <div className="relative">
        <svg
          viewBox="0 0 33.83098862 33.83098862"
          className="items-center w-24 h-24 mx-auto lg:h-32 lg:w-32 xl:h-48 xl:w-48"
        >
          <circle
            className="text-white"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            cx="16.91549431"
            cy="16.91549431"
            r="15.91549431"
          />
          <circle
            className="duration-1000 ease-linear origin-center transform -rotate-90 text-olive"
            stroke="currentColor"
            strokeWidth={2}
            strokeDasharray={`${percentage}, 100`}
            strokeLinecap="round"
            fill="none"
            cx="16.91549431"
            cy="16.91549431"
            r="15.91549431"
          />
        </svg>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-4xl font-light md:text-4xl lg:text-4xl xl:text-4xl text-white">
          <h3>{value}</h3>
        </div>
      </div>
      <h1 className="mt-5 text-2xl font-normal text-white">{label}</h1>
    </div>
  );
};

function Main({ date, url }) {
  return (
    <section
      className="flex items-center flex-col h-full min-h-screen bg-center bg-cover h-full min-h-screen w-screen bg-white/50 "
      style={{ backgroundImage: "url(/images/fondo.png)" }}
    >
      <div id="header" className="flex items-center justify-center flex-row ">
        <div className="pt-24 md:pt-16 xl:pt-16">
          <h1 className="font-Montserrat text-center leading-none text-white font-bold text-[32px] md:text-[52px] xl:text-[52px] xxl:text-[52px]">
            SAVE THE DATE
          </h1>
          <p className="font-normal text-center text-yellow font-bold text-[32px] md:text-[42px] xl:text-[42px] xxl:text-[42px]">
            23.06.2022
          </p>
          <p className="font-light text-center text-white font-bold text-[19px] md:text-[27px] xl:text-[27px] xxl:text-[27px]">
            <spam className="text-yellow">19HS</spam> HILTON BUENOS AIRES
          </p>
        </div>
      </div>
      <Countdown
        date={date}
        renderer={(props) => {
          return <Renderer url={url} {...props} />;
        }}
      />
      <h1 className="font-Montserrat text-xl md:text-xl lg:text-3xl text-white mt-10 md:mt-8 xl:mt-8 text-center">
        <spam className="font-bold">Presenta</spam> <br />
        Superando nuevos limites con Jardiance
      </h1>
      <a
        href="http://#"
        className=" text-white bg-lightgreen font-Montserrat mt-0 font-bold py-2 px-10 border border-lightgreen  rounded-full flex flex-col justify-content align-content-center items-center mt-7 md:mt-9 xl:mt-9"
      >
        REGISTRATE
        <img
          src="../images/downarrow.svg"
          className="max-w-[20px]"
          alt="icon arrow"
        />
      </a>
      {/* <img
        className="absolute h-16 lg:h-24 top-4 left-4 max-w-[188px] md:max-w-[188px] xl:max-w-[188px]"
        src="/images/logo.png"
        alt="logo"
      /> */}
      {/* <div className="absolute top-24 md:top-4 xxl:top-24">
        <h1 className="font-Montserrat text-center leading-none text-white font-bold text-[32px] md:text-[52px] xl:text-[52px] xxl:text-[52px]">
          SAVE THE DATE
        </h1>
        <p className="font-normal text-center text-yellow font-bold text-[32px] md:text-[42px] xl:text-[42px] xxl:text-[42px]">
          23.06.2022
        </p>
        <p className="font-light text-center text-white font-bold text-[19px] md:text-[27px] xl:text-[27px] xxl:text-[27px]">
          <spam className="text-yellow">19HS</spam> HILTON BUENOS AIRES
        </p>
      </div> */}
      {/* <Countdown
        date={date}
        renderer={(props) => {
          return <Renderer url={url} {...props} />;
        }}
      /> */}
      {/* 
      <h1 className="font-Montserrat text-xl md:text-xl lg:text-3xl text-white mt-10 text-center">
        <spam className="font-bold">Presenta</spam> <br />
        Superando nuevos limites con Jardiance
      </h1> */}
      {/* <div className="absolute pt-264 md:pt-96  lg:bottom-10 left-center"> */}
      {/* <a
        href="http://#"
        className="text-white bg-lightgreen font-Montserrat mt-0 font-bold py-2 px-4 border border-lightgreen  rounded-full flex flex-col justify-content align-content-center items-center"
      >
        REGISTRATE
        <img
          src="../images/downarrow.svg"
          className="width-26"
          alt="icon arrow"
        />
      </a> */}
      {/* </div> */}
      <GeneroToken />
    </section>
  );
}

export default Main;
