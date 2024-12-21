import React, { useEffect, useState } from "react";
import Logo from "../../Assets/Images/Home/Png/Hero-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

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

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setShow(false);
  };

  return (
    <div className="bg-[#161616]">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-[20px] mt-2">
          <div className="flex items-center justify-between h-[50px] md:h-[81px] z-50 relative">
            <div>
              <a href="/" className="z-50 relative">
                <img
                  src={Logo}
                  alt=""
                  className="w-[188px] h-[32px] md:h-[38px]"
                />
              </a>
            </div>
            <ul
              className={`${
                show ? "left-0" : "-left-full"
              } duration-500 bg-[#161616] w-full h-full top-0 fixed gap-10 xl:gap-12 flex flex-col justify-center items-center xl:bg-transparent xl:flex-row xl:static xl:w-auto xl:h-full z-40`}
            >
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Our Clients", path: "/our-clients" },
                { name: "Contact Us", path: "/contact-us" }, // Consistent case
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() => handleLinkClick(index)}
                    className={`relative transition-all ease-in-out duration-500 font-dm font-medium text-base leading-[126%] hover:after:w-[57px] ${
                      activeLink === index
                        ? "!text-[#fff] xl:after:w-[57px] xl:after:border-b-[#ffa852] xl:after:border-l-[30px] xl:after:border-l-transparent xl:after:border-r-[30px] xl:after:border-r-transparent xl:after:border-b-[30px] xl:after:border-b-black xl:after:rotate-180"
                        : "text-white"
                    } xl:after:absolute xl:after:top-[-40px] xl:after:left-[-5px] xl:after:h-[30px]`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="font-dm hidden md:block font-medium text-lg leading-[126%] text-black hover:text-[#ffa852] bg-[#fff] hover:bg-white duration-500 ease-in-out py-[12px] px-[15px] rounded-full">
              Get in touch
            </button>
            <button
              className="xl:hidden z-50 transition-all duration-300 ease-in-out sm:mr-[25px]"
              onClick={() => {
                setShow(!show);
              }}
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
