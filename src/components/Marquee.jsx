import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className=" w-full py-[4vw] bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-400 flex  gap-10 whitespace-nowrap -tracking-[1.5em] overflow-hidden">
      <motion.h1
      // initial={{ x: 0 }}
      // animate={{ x: "-100%" }}
      // transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
      className='text-[22vw] leading-none uppercase font-abc font-semibold -pt-2 mb-3'
    >
      We are gochi
    </motion.h1>
    <motion.h1
      // initial={{ x: 0 }}
      // animate={{ x: "-100%" }}
      // transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
      className='text-[22vw] leading-none uppercase font-abc font-semibold -pt-2 mb-3'
    >
      We are gochi
    </motion.h1>
    <motion.h1
      // initial={{ x: 0 }}
      // animate={{ x: "-100%" }}
      // transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
      className='text-[22vw] leading-none uppercase font-abc font-semibold -pt-2 mb-3'
    >
      We are gochi
    </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
