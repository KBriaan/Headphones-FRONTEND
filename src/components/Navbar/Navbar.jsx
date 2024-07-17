import { IoMdMenu } from "react-icons/io";
import { SlEarphones } from "react-icons/sl";
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blogs",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="bg-brandDark text-white py-4">
        <nav className="flex justify-between items-center">
          {/* logo section */}
          <div>
            <a href="#" className="text-xl font-bold uppercase">
              Playing/
              <span className="font-extralight text-white/70">Market</span>
            </a>
          </div>
          {/* menu section  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block text-sm py-2 px-3 uppercase"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <SlEarphones />
            </ul>

            <div></div>
          </div>
          {/* mobile hambuger section */}
          <div>
            <IoMdMenu />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
