import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers.js";
import { capitalizeFirstLetter } from "../../utils/helpers.js";
import { motion } from "framer-motion";
import { IoMdCopy } from "react-icons/io";
import { Tooltip } from "@material-tailwind/react";

const copyEmail = (
  <span class="ml-2 inline-flex no-underline shadow-lg dark:bg-dark_theme_elevated_3 border border-light_theme_blue dark:border-dark_theme_cyan text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
    <IoMdCopy /> Copy
  </span>
);

export default function Contact({ biggerThan1000, biggerThan750 }) {
  const [formState, setFormState] = useState({
    name: "",
    from_email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = ({ target }) => {
    if (target.name === "user_email") {
      const isValid = validateEmail(target.value);
      if (!isValid) {
        setErrorMessage("Email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!target.value.length) {
        setErrorMessage(`${target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [target.name]: target.value });
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    if (!errorMessage) {
      emailjs
        .sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          form.current,
          process.env.PUBLIC_KEY
        )
        .then((result) => {
          if (result.text === "OK" && result.status === 200) {
            e.target.reset();
            errorMessage("Email was successfully sent!");
          }
        })
        .catch((error) => {
          errorMessage("Something went wrong. You can reach me on linkedIn.");
        });
    }
  };

  function handleCopy({ target }) {
    document.execCommand(target.innerText);
  }

  return (
    <motion.section id="Contact" className="sections">
      <div
        className={` ${
          biggerThan750 ? "ml-20" : "m-auto text-center items-center"
        } max-w-2xl flex flex-col gap-5`}
      >
        <h2 className="title-text">Contact me</h2>
        <p className={` ${!biggerThan1000 ? "w-10/12" : "w-full"}`}>
          I would love to hear from you. Shoot me a message and I will get back
          to you as soon as I can. You can also email me at{" "}
          <Tooltip
            data-tooltip-target="tooltip-right"
            data-tooltip-placement="right"
            content={"copy"}
            className="bg-black text-white dark:bg-main_white dark:text-main_black rounded-md "
          >
            <span
              className="underline text-light_theme_blue dark:text-dark_theme_cyan cursor-pointer"
              onClick={handleCopy}
            >
              andrewhowran@gmail.com
            </span>
          </Tooltip>
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="flex flex-col w-10/12 gap-3 text-start"
        >
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-main_white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-light_theme_blue dark:focus:border-dark_theme_cyan peer"
              placeholder=" "
              required
              onBlur={handleChange}
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light_theme_blue  dark:peer-focus:text-dark_theme_cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-main_white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-light_theme_blue dark:focus:border-dark_theme_cyan peer"
              placeholder=" "
              required
              onBlur={handleChange}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light_theme_blue dark:peer-focus:text-dark_theme_cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="message"
              id=""
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-main_white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-light_theme_blue dark:focus:border-dark_theme_cyan peer"
              placeholder=" "
              required
              onBlur={handleChange}
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light_theme_blue dark:peer-focus:text-dark_theme_cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          {/* <input
            required
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 pl-6 contact-form"
            onBlur={handleChange}
          />
          <input
            required
            type="email"
            name="user_email"
            placeholder="Email"
            className="p-3 pl-6 contact-form"
            onBlur={handleChange}
          />
          <textarea
            required
            name="message"
            className="p-3 pl-6 h-40 contact-form"
            placeholder="Message"
            resize="none"
            onBlur={handleChange}
          ></textarea> */}
          <div
            className={`${
              !errorMessage ? "justify-end" : "justify-between "
            }   flex align-center `}
          >
            {errorMessage && (
              <div className="inline whitespace-nowrap text-md sm:text-xl transition-all duration-100">
                {capitalizeFirstLetter(errorMessage)}
              </div>
            )}

            <button
              // disabled when an email is successfully sent, can bots click the send btn?
              className="custom-btn px-3"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
