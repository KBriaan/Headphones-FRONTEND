import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const fadeup = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphonesData = [
  {
    id: 1,
    title: "Headphones Wireless 1",
    image: Headphone1,
    price: "$199",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum maxime accusantium cum doloribus ut odit voluptates consequatur soluta dolorem rem.",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    title: "Headphone wireless 2",
    image: Headphone2,
    price: "$199",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum maxime accusantium cum doloribus ut odit voluptates consequatur soluta dolorem rem.",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    title: "Headphone wireless 3",
    image: Headphone3,
    price: "$199",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum maxime accusantium cum doloribus ut odit voluptates consequatur soluta dolorem rem.",
    modal: "Blues",
    bgColor: "#5d818c",
  },
];
const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphonesData[0]);
  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* headphone info  */}
          <div className="flex flex-col justify-center py-14 px-7 md:py-0 xl:max-w[500px]">
            <div className="space-y-4 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: 720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  
                  <motion.h1
                    key={activeData.id}
                    variants={fadeup(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {activeData.title}
                  </motion.h1>{" "}
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
              
                <motion.p
                  key={activeData.id}
                  variants={fadeup(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80 "
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>



<AnimatePresence mode="wait">
<UpdateFollower   mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: 720,
                    mixBlendMode: "difference",
                    scale: 10,
                    backgroundElement:
                    
                    
                    <div> <img src={activeData.image} alt="" /></div>
                  }}>
                  <motion.button key={activeData.id}
                  variants={fadeup(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                style={{ backgroundColor: activeData.bgColor }}
                className="px-4 py-2 inline-block font-normal rounded-sm"
              >
                Buy and Listen
              </motion.button></UpdateFollower>
                  </AnimatePresence>

                  
             

              {/* headphone list separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm">Top Headphones for you</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              {/* headphone list switcher */}
              <div className="grid grid-cols-3 gap-10">
                {headphonesData.map((item) => {
                  return (
                    <div
                      onClick={() => handleActiveData(item)}
                      key={item.id}
                      className="grid grid-cols-2 place-content-center cursor-pointer"
                    >
                      <div>
                        <img src={item.image} alt="" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{item.price}</p>
                        <p className="text-xs font-normal text-nowrap">
                          {item.modal}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex flex-col items-center">





            <img
              src={activeData.image}
              className="w-[300px] md:w-[400px] xl:w-[500px]"
            ></img>
          </div>
          {/* whatsap icon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference ">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
