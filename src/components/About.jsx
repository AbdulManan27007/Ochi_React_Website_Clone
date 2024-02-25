import React from "react";
const About = () => {
  return (
    <>
      <div className="w-full p-20 bg-[#CDEA68]  rounded-tl-3xl rounded-rl-3xl text-[#212121] font-Mont">
        <h1 className=" font-normal	 text-[4.5vw]  leading-[4.5vw] tracking-tight ">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          peopple.
        </h1>

        <div className="flex w-full text-[#212121]  gap-[20vw] mt-11 border-[#a1b562] border-t-2 ">
          {[
            "What you can expect:",
            "We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people. We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.",
            "Instagram",
          ].map((item, index) => (
            <p
              className=" text-lg font-medium  max-w-96  ml-4 mr-10 mt-[2vw]  leading-normal "
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
        {/* 3rd */}
        <div className="flex w-full border-t-[1px] pt-10 mt-20 border-[#a1b562]">
          <div className=" w-1/2 ">
            <h1 className="text-6xl ">Our approach:</h1>
            <button className=" flex items-center gap-10 uppercase rounded-full bg-zinc-900 text-white px-10 py-6 mt-10 ">
              read more
              <div className="w-2 h-2 rounded-full bg-white "></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh] bg-green-700 rounded-3xl relative">
            <img
              src="src\Images\Pic.jpg"
              alt="Abdul Manan"
              className="absolute inset-0  w-full h-full object-cover rounded-3xl"
              
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
