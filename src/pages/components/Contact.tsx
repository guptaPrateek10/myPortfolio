import React, { FormEvent, useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
type Props = {};

const Contact = (props: Props) => {
  const ref = React.useRef<HTMLFormElement>(null);

  function sendEmail(event: any): void {
    event.preventDefault();
    const currentForm = ref.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_ms8144b",
        "template_x7iixqz",
        currentForm,
        "KXIqLmKwpq6z6HpSa"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("successfull");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="h-screen relative flex flex-col items-center justify-evenly text-center md:text-left md:flex-col max-w-7xl md:px-10 lg:px-10 px-4 mx-auto  md:my-0 ">
      {/* Heading */}
      <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl mb-10 ">
        Contact
      </h3>
      {/* Personal Detail section */}
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center ">
          Fill the below details to{" "}
          <span className="decoration-[#f7ab0a]/50 underline">E-Mail me</span>.
        </h4>
        <div className="dark:text-gray-500 space-y-10 flex flex-col  items-start mx-auto">
          <div className="flex items-center space-x-5  justify-center ">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p>+91-9960860411</p>
          </div>
          <div className="flex items-center space-x-5  justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p>GuptaPrateek10@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5  justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p>Varanasi- U.P</p>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <form
        ref={ref}
        onSubmit={sendEmail}
        className="flex space-y-3 flex-col w-fit mx-auto"
      >
        <div className="space-x-0 space-y-3 md:space-x-3  ">
          <input
            required
            type="text"
            className="ContactInput"
            placeholder="Name"
            name="user_name"
          />
          <input
            required
            type="email"
            className="ContactInput"
            placeholder="Email"
            name="user_email"
          />
        </div>
        <input
          type="text"
          className="ContactInput"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          required
          className="ContactInput"
          placeholder="Message"
          name="message"
        />
        <button
          type="submit"
          className="bg-[#f7ab0a] py-5 px-10  rounded-sm dark:text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
