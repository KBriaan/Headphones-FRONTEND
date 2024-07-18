import { FaFacebook, FaGoogle, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { FaPhone, FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}

          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Playing</h1>
            <p className="text-sm max-w-[300px]">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi
              optio repellendus placeat dicta exercitationem quo aperiam
              molestiae perspiciatis nulla.
            </p>
            <div>
              <p className="flex items-center gap-2">
                {" "}
                <FaPhone /> +254799860103{" "}
              </p>

              <p className="flex items-center gap-2">
                {" "}
                <FaMapLocation /> Kobel, Konoin{" "}
              </p>
            </div>
          </div>
          {/* footer links section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold"> Quick Links</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          {/* social links section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">
Follow us
            </h1>
            <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
                <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
                <FaTwitter className="text-3xl hover:scale-105 duration-300"/>
                <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
                <FaGoogle className="text-3xl hover:scale-105 duration-300"/>

            </div>
           
          </div>

          {/* copyright section */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
