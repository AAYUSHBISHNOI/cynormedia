import { useState } from "react";
import { AddIcon, RemoveIcon } from "../Common.jsx/Icons";
import man from "../../Assets/Images/OurClients/Faq.png";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const accordianData = [
    {
      id: 1,
      heading: "What kind of events do you manage?",
      para: "We manage everything from corporate events, product launches, Float Van services and campaigns, and test drive events to residential and mall activations across India.",
    },
    {
      id: 2,
      heading: "Are your services available outside Chandigarh?",
      para: "Yes — we offer PAN India services and activations with strong operational networks across multiple cities",
    },
    {
      id: 3,
      heading:
        "Can you customize marketing solutions based on our brand requirements?",
      para: "Absolutely! We specialize in tailor-made, brand-specific activations and marketing services <Insert link> that align with your goals.",
    },
    {
      id: 4,
      heading: "How do you ensure the success of a campaign?",
      para: "We combine creative ideas with strategic planning, data-backed insights, and seamless execution to deliver measurable, result-driven campaigns.",
    },
    {
      id: 5,
      heading:
        "Do you provide branding materials like hoardings, banners, and merchandise?",
      para: "Yes- we provide end-to-end services including hoardings, wall wraps, flex banners, mug and t-shirt printing, leaflets, and more.",
    },
    {
      id: 6,
      heading: "How do I get started with Cynor Media?",
      para: "Simply reach out to us via our website, call, or email, and let’s discuss how we can ignite your next marketing campaign!",
    },
  ];

  return (
    <div className="bg-black py-10 md:py-14 lg:py-32 lg:pt-20 lg:mt-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-3/5">
            <div id="Faqs" className="faq-main-div relative px-4">
              {/* <div className="relative">
                <div className="absolute top-[60%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#64ccc5] blur-[150px] opacity-20 z-0"></div>
                <div className="rounded-[484px] h-[484px] w-[484px] bg-[#64ccc5] blur-[100px] absolute bottom-[10%] right-[18%] opacity-10 z-10"></div>
              </div> */}
              <div className="relative container max-w-[1164px] mx-auto z-20">
                <p className="font-dm font-bold text-4xl md:text-6xl xl:text-7xl uppercase text-white max-w-[545px] md:max-w-[740px] xl:max-w-[608px] mb-4 lg:mb-14 text-center lg:text-start">
                  Frequently Ask
                  <span className="text-[#64ccc5]">Questions</span>
                </p>
                {/* Accordion Items */}
                {accordianData.map((data, index) => (
                  <div
                    key={index}
                    className="p-[1px] rounded-[6px] bg-gradient-to-r from-[#64ccc5] via-[#64ccc500] to-[#64ccc5] mt-[32px] max-w-[970px] w-full"
                  >
                    <div
                      className="accordian-main w-full overflow-hidden rounded-[6px] bg-black bg-clip-padding pb-[13px] ps-[20px] text-white"
                      style={{ border: "1px solid transparent" }}
                    >
                      <div
                        onClick={() => toggleAccordion(index)}
                        className="flex"
                      >
                        <h2
                          className={`accordian-heading mb-0 flex w-[100%] cursor-pointer items-center justify-between text-start font-roboto text-[15px] md:text-[20px] font-normal leading-121 ${
                            openAccordion === index
                              ? "text-[#64ccc5]"
                              : "text-white"
                          }`}
                        >
                          {data.heading}
                        </h2>
                        <span
                          className={`md:ml-4 flex h-[70px] w-[50px] md:w-[70px] items-center justify-center transition-colors duration-300 ${
                            openAccordion === index
                              ? "bg-[#64ccc5] text-black"
                              : "bg-transparent"
                          }`}
                        >
                          {openAccordion === index ? (
                            <RemoveIcon />
                          ) : (
                            <AddIcon />
                          )}
                        </span>
                      </div>
                      <div
                        className={`transition-all duration-300 ease-linear pt-0 pb-0 ${
                          openAccordion === index
                            ? "sm:h-[65px] lg:h-[90px] h-[100px]"
                            : "h-[0px]"
                        }`}
                      >
                        <p className="font-medium font-dm leading-[25px] max-w-[850px] md:max-w-[643px] lg:max-w-[538px] text-[#ccd0d1] pb-0 pt-[8px]">
                          {data.para}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 mt-10 lg:mt-0">
            <img src={man} alt="FAQ Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
