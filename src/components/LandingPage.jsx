import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const LandingPage = () => {
  return (
    <div className=" w-auto h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-44 px-20">
        {["We Create", "Eye Opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className=" w-auto flex items-end overflow-hidden  ">
                {index == 1 && (
                  <div className=" mr-2  w-[10vw] h-[6.4vw] relative top-[-.3vw] rounded-md bg-green-500"></div>
                )}
                <h1 className="uppercase text-[8vw] h-full  items-center leading-[7.5vw] tracking-[-0.01  em] font-semibold  font-abc">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 justify-between items-center flex py-5 px-20 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className={"text-lg font-light"}>{item}</p>
        ))}

        <div className="start flex gap-5 items-center justify-between ">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase  hover:bg-black text-white">
            start the project
          </div> 
          <div className="flex items-center justify-center w-10 h-10 border-[1px] border-zinc-500 rounded-full  hover:bg-black text-white">
            <LuArrowUpRight className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
