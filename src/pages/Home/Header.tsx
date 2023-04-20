import React from "react";
import poster from "../../assets/poster.png";

type HomeType = {};

const Header: React.FC<HomeType> = (props) => {
  return (
    <section
      className={
        "relative flex min-h-screen w-full items-center px-12 pt-20 lg:px-32"
      }
      style={{
        background: `linear-gradient(90deg, rgba(255,255,255,1) 44%, rgba(255,255,255,0) 100%), url(${poster})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 180vh",
        backgroundPosition: "right",
      }}
    >
      <div className={"flex flex-col"}>
        <h3 className={"text-lg"}>
          <span className={"text-red-800"}>VII</span> Congresso Internacional de
          <br />
          <span className={"text-red-800"}>Literatura Infantil e Juvenil</span>
        </h3>
        <h1 className={"text-4xl font-black md:max-w-screen-sm md:text-6xl"}>
          Educação literária:
          <span className={"font-['Caveat'] text-red-700"}>
            {" "}
            Mudanças em movimento
          </span>
        </h1>
        <div className={"mt-10 w-fit"}>
          <a
            className={
              "cursor-pointer rounded-full bg-bermuda-500 p-2 px-4 text-white hover:bg-bermuda-400"
            }
          >
            Faça sua inscrição
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
