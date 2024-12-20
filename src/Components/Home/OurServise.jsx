import React from "react";
import { Btl, Digital, Pen, Pencil, Product, Web } from "../Common.jsx/Icons";

const OurServise = () => {
  return (
    <div>
      <div className=" max-w-[1440px] mx-auto py-10 md:pt-[50px] md:pb-[80px] px-4">
        {/* <div className="circle_gradient_border w-[550px] h-[550px] rounded-full flex items-center justify-center">
          <div className="inner_circle w-full h-full rounded-full"></div>
        </div> */}

        <div className=" text-center flex flex-col justify-center items-center">
          <p className=" text-light_green font-semibold leading-130 font-roboto text-2xl md:text-3xl">
            Our Services
          </p>
          <h2 className=" text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] font-roboto font-semibold leading-121 text-light_black max-w-[690px] md:max-w-[797px] text-center">
            High-impact services for your business
          </h2>
        </div>
        <div className="flex mt-4 xl:mt-[80px] flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-0">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              <Pencil />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Float Van Campaign
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[328px]">
                Discover the marketing on-the-go. Our demo van is an interactive
                showroom on wheels, driving engagement, loyalty, and
                conversions.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-0">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              <Pen />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Market Setup
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[308px]">
                Elevate your brand's presence with our market setup services. We
                provide tailored solutions for events, exhibitions, and
                activations, ensuring a lasting impact on your target audience
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-0">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              <Digital />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Digital Marketing
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[328px]">
                Digital marketing uses digital channels to promote products,
                services, or brands through SEO, social media, email, and
                content marketing.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-[80px]">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              <Web />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Web Development
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[378px]">
                We specialize in crafting visually captivating and user-friendly
                websites tailored to your brand identity. Our designs focus on
                delivering seamless user experiences that leave a lasting
                impression.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-[80px]">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              <Btl />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Btl Marketing
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[408px]">
                BTL marketing targets specific audiences through events,
                sponsorships, and trade shows to create personal connections and
                drive sales.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-[80px]">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              <Product />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Product Launch
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[310px]">
                Maximize your launch momentum! Our tailored services include
                strategy development, event planning, content creation, and
                more, all designed to generate excitement and drive results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServise;
