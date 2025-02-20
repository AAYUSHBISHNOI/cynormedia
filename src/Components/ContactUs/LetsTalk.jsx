import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
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
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle phone number input (only digits allowed)
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    // EmailJS Service Details
    const serviceId = "service_nxiai8h";
    const templateId = "template_76hdynp";
    const publicKey = "IvqQP1G2d8gxS6Zdz";

    const emailParams = {
      email,
      name,
      lastName,
      phone,
      message,
    };

    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then(() => {
        setSuccessMessage("Your message has been sent successfully!");
        setEmail("");
        setName("");
        setLastName("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setErrorMessage("Failed to send the message. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
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
            <div className="w-[280px] lg:w-[285px] xl:w-[401px] h-[2px] bg-[#dfdfdf] mt-3 lg:mt-8"></div>

            {/* Contact Info */}
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
                        href="mailto:info@cynormedia.com"
                        className="font-dm font-normal text-base text-light_black"
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
                        href="tel:+917988709158"
                        className="font-dm font-normal text-base text-light_black"
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
                        href="https://www.google.com/maps/place/Cynor+Media/"
                        className="font-dm font-normal text-base text-light_black"
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

            <div className="w-[280px] lg:w-[285px] xl:w-[401px] h-[2px] bg-[#dfdfdf] mt-4 md:mt-8"></div>
            {/* <div className="flex gap-10 mt-4">
              <FacebookContact />
              <InstagramContact />
              <LinkdinContact />
            </div> */}
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
                  <div className="w-[40%] flex flex-col mb-4 md:mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="First Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-transparent !text-[#0c0c0c] font-dm text-lg leading-121 outline-none placeholder:text-[#0c0c0c] placeholder:font-dm placeholder:text-lg w-[240px] lg:w-[230px] xl:w-[345px] h-[30px]"
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
                      className="bg-transparent !text-[#0c0c0c] font-dm text-lg leading-121 outline-none placeholder:text-[#0c0c0c] placeholder:font-dm placeholder:text-lg w-[240px] lg:w-[230px] xl:w-[345px] h-[30px]"
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
                      className="bg-transparent !text-[#0c0c0c] font-dm text-lg leading-121 outline-none placeholder:text-[#0c0c0c] placeholder:font-dm placeholder:text-lg w-[240px] lg:w-[230px] xl:w-[345px] h-[30px]"
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
                      className="bg-transparent !text-[#0c0c0c] font-dm text-lg leading-121 outline-none placeholder:text-[#0c0c0c] placeholder:font-dm placeholder:text-lg w-[240px] lg:w-[230px] xl:w-[345px] h-[30px]"
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
              {/* <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-[#0c0c0c] font-dm text-lg outline-none w-full h-[30px] mt-5"
                />
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="bg-transparent text-[#0c0c0c] font-dm text-lg outline-none w-full h-[30px] mt-5"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-transparent text-[#0c0c0c] font-dm text-lg outline-none resize-none w-full h-[100px] mt-5"
                ></textarea>
              </div> */}
              {successMessage && (
                <p className="font-roboto font-light text-lg text-light_black leading-121 mt-3">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="text-red-600 font-roboto font-light text-lg leading-121 mt-3">
                  {errorMessage}
                </p>
              )}
              <div className="flex mt-5 lg:mt-[54px]">
                <button
                  type="submit"
                  disabled={isSending}
                  className="font-dm font-normal text-lg leading-121 text-[#fbfbfb] bg-[#0c0c0c] hover:bg-[#535252] duration-300 ease-in-out py-3 px-4 rounded-full"
                >
                  {isSending ? "Sending..." : "Submit Now"}
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
