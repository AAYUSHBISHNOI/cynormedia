import React, { useEffect, useState } from "react";
import Logo from "../../Assets/Images/Home/Svg/Footer-Logo.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Clients", path: "/our-clients" },
    { name: "Contact Us", path: "/contact-us" },
    // { name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.classList.remove("overflow-hidden");
        setShow(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#000000]">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-[20px] mt-2">
          <div className="flex items-center justify-between h-[50px] md:h-[100px] z-50 relative">
            {/* Logo */}
            <div>
              <a href="/" className="z-50 relative">
                <div className="flex items-center gap-2">
                  <img src={Logo} alt="Cynor Logo" />
                  <p className="font-roboto font-semibold text-base md:text-[20px] text-white mb-0">
                    Cynor Media
                  </p>
                </div>
              </a>
            </div>

            {/* Nav Links */}
            <ul
              className={`${
                show ? "left-0" : "-left-full"
              } duration-500 bg-[#000000] w-full h-full top-0 fixed gap-10 xl:gap-12 flex flex-col justify-center items-center xl:bg-transparent xl:flex-row xl:static xl:w-auto xl:h-full z-40`}
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() => setShow(false)}
                    className={`transition-all ease-in-out duration-300 font-dm font-medium text-base leading-[126%] 
                      ${
                        location.pathname === item.path
                          ? "text-[#64cccc]"
                          : "text-white hover:text-[#64cccc]"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="group">
              <button
                className="font-dm hidden md:block font-medium text-lg leading-[126%] 
                  text-black bg-[#fff] py-[12px] px-[15px] rounded-full duration-700 ease-in-out
                  group-hover:text-white group-hover:bg-[#44e6db]"
                onClick={() =>
                  window.open("https://wa.me/+917988709158", "_blank")
                }
              >
                Get in touch
              </button>
            </div>

            {/* Toggle Button */}
            <button
              className="xl:hidden z-50 transition-all duration-300 ease-in-out sm:mr-[25px]"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <div className="z-20 relative">
                  <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                  <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                </div>
              ) : (
                <div className="z-20 relative flex flex-col justify-end items-end">
                  <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6"></span>
                  <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                  <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
