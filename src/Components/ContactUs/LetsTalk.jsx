import React, { useState } from "react";
import {
  Call,
  Email,
  FacebookContact,
  InstagramContact,
  LinkdinContact,
  MapIcon,
} from "../Common.jsx/Icons";

const LetsTalk = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Handle phone number input, allowing only digits (no minus signs)
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Remove any non-digit characters
    if (value.length <= 10) {
      setPhone(value); // Set phone if it's less than or equal to 10 digits
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form:", { email, name, lastName, phone, message });

    // Reset the form fields after submission
    setEmail("");
    setName("");
    setLastName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="py-10 lg:pt-14 xl:pt-[162px] lg:pb-[105px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-[40%] lg:w-[30%] flex flex-col justify-center items-center md:justify-start md:items-start">
            <h1 className="font-roboto font-semibold text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] text-light_black leading-121">
              Let’s talk
            </h1>
            <p className="font-dm font-normal text-lg text-light_black leading-121 mb-0 mt-2 lg:mt-4 xl:mt-8 text-center md:text-start">
              We collaborate with thousands of creators, entrepreneurs and
              complete legends.
            </p>
            <div className="w-[280px] md:w-[280px] lg:w-[285px] xl:w-[401px] h-[2px] bg-[#dfdfdf] mt-3 lg:mt-8"></div>
            <div className="mt-4 lg:mt-8">
              <div className="flex gap-3 md:gap-6">
                <Email />
                <div>
                  <p className="font-roboto font-semibold text-xl text-light_black leading-121">
                    Our email
                  </p>
                  <ul>
                    <li>
                      <a
                        href="mailto:"
                        className="font-dm font-normal text-base leading-121 text-light_black"
                      >
                        info@cynormedia.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex mt-[20px] gap-3 md:gap-6">
                <Call />
                <div>
                  <p className="font-roboto font-semibold text-xl text-light_black leading-121">
                    Call us
                  </p>
                  <ul>
                    <li>
                      <a
                        href="tel:+1234567892"
                        className="font-dm font-normal text-base leading-121 text-light_black"
                      >
                        +91 7988709158
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex mt-[20px] gap-3 md:gap-6">
                <MapIcon />
                <div>
                  <p className="font-roboto font-semibold text-xl text-light_black leading-121">
                    Find us
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.google.com/maps/place/Cynor+Media/@30.6339145,76.8020573,17z/data=!3m1!4b1!4m6!3m5!1s0x390feb26ec66853b:0x88d9cbbca0721a13!8m2!3d30.6339145!4d76.8046322!16s%2Fg%2F11gdx1w6_2?entry=ttu"
                        className="font-dm font-normal text-base leading-121 text-light_black"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Google Maps
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[280px] md:w-[280px] lg:w-[285px] xl:w-[401px] h-[2px] bg-[#dfdfdf] mt-4 md:mt-8"></div>
            <div className="flex gap-10 mt-4">
              <FacebookContact />
              <InstagramContact />
              <LinkdinContact />
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-[58%] mt-8">
            <form
              onSubmit={handleSubmit}
              className="bg-[#f4f4f4] rounded-[20px] p-6 lg:p-8 xl:p-10 z-10"
            >
              <div className="lg:flex flex-wrap justify-between">
                <div className="w-full lg:w-[46%]">
                  {/* First Name */}
                  <div className="w-[46%] flex flex-col mb-4 md:mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="First Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-transparent !text-[#0c0c0c] font-dm text-lg leading-121 outline-none placeholder:text-[#0c0c0c] placeholder:font-dm placeholder:text-lg w-[240px] lg:w-[230px] xl:w-[415px] h-[30px]"
                    />
                  </div>
                  <div className="w-full h-[2px] bg-[#dfdfdf] mt-3 lg:mt-8 xl:mt-[50px]"></div>
                  {/* Email */}
                  <div className="flex flex-col mb-4 md:mb-0 mt-5 lg:mt-[54px]">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent !text-[#0c0c0c] font-dm text-lg leading-121 outline-none placeholder:text-[#0c0c0c] placeholder:font-dm placeholder:text-lg w-[240px] lg:w-[230px] xl:w-[415px] h-[30px]"
                    />
                  </div>
                  <div className="w-full h-[2px] bg-[#dfdfdf] mt-3 lg:mt-8 xl:mt-[50px]"></div>
                </div>
                <div className="w-full lg:w-2/4 mt-5 lg:mt-0">
                  {/* Last Name */}
                  <div className=" flex flex-col mb-4 md:mb-0">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="bg-transparent !text-[#0c0c0c] font-dm text-lg leading-121 outline-none placeholder:text-[#0c0c0c] placeholder:font-dm placeholder:text-lg w-[240px] lg:w-[230px] xl:w-[415px] h-[30px]"
                    />
                  </div>
                  <div className="w-full h-[2px] bg-[#dfdfdf] mt-3 lg:mt-8 xl:mt-[50px]"></div>
                  {/* Phone */}
                  <div className="flex flex-col mb-4 md:mb-0 mt-5 lg:mt-[54px]">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Phone Number"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="bg-transparent !text-[#0c0c0c] font-dm text-lg leading-121 outline-none placeholder:text-[#0c0c0c] placeholder:font-dm placeholder:text-lg w-[240px] lg:w-[230px] xl:w-[415px] h-[30px]"
                    />
                  </div>
                  <div className="w-full h-[2px] bg-[#dfdfdf] mt-3 lg:mt-8 xl:mt-[50px]"></div>
                </div>
              </div>
              {/* Message */}
              <div className="flex flex-col mb-4 md:mb-0 mt-5 lg:mt-[54px]">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-transparent !text-[#0c0c0c] font-dm text-lg leading-121 outline-none placeholder:text-[#0c0c0c] placeholder:font-dm placeholder:text-lg resize-none"
                />
              </div>
              <div className="w-full h-[2px] bg-[#dfdfdf] mt-3 lg:mt-8 xl:mt-[50px]"></div>

              {/* Submit Button */}
              <div className="flex mt-5 lg:mt-[54px]">
                <button
                  type="submit"
                  className="font-dm font-normal text-lg leading-121 text-[#fbfbfb] bg-[#0c0c0c] hover:bg-[#535252] duration-300 ease-in-out py-3 px-4 rounded-full"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
