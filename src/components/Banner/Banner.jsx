import Headphone4 from "../../assets/headphone4.png";
const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-5">
          {/* Banner image */}
          <div>
            <img src={Headphone4} className="w-[300px] md:w-[400px]"></img>
          </div>
          {/* banner text info */}
        <div className="flex flex-col justify-center">
        <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1 className="text-3xl lg:text-4xl font-semibold font-poppins">
              The Latest Headphones with The Latest Technology{" "}
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam eius saepe esse, possimus maiores nostrum reprehenderit
              voluptates ullam alias optio.
            </p>
            <button className="border-2 border-[#e33343] text-[#e3343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white">Shop Now</button>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
