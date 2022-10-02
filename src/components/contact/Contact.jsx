import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers.js";
import { capitalizeFirstLetter } from "../../utils/helpers.js";
import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";

export default function Contact({ biggerThan1000 }) {
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

  return (
    <section id="Contact" className="sections">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={` ${
          biggerThan1000 ? "ml-20" : "m-auto text-center items-center"
        } max-w-2xl flex flex-col gap-5`}
      >
        <h2 className="title-text">Contact me</h2>
        <p className={` ${!biggerThan1000 ? "w-10/12" : "w-full"}`}>
          I would love to hear from you. Shoot me a message and I will get back
          to you as soon as I can. You can also email me at{" "}
          <Tooltip
            animate={{
              mount: { scale: 1, x: 0 },
              unmount: { scale: 0, x: -30 },
            }}
            content={"Mailto"}
            placement="right-start"
            className="bg-sla shadow-light_theme_blue text-light_theme_blue dark:text-dark_theme_cyan  dark:bg-dark_theme_elevated_2"
          >
            <a
              href="mailto:andrewhowran@gmail.com"
              className="underline text-light_theme_blue dark:text-dark_theme_cyan cursor-pointer"
              target={"_blank"}
            >
              andrewhowran@gmail.com
            </a>
          </Tooltip>
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="flex flex-col w-10/12 gap-3 text-start"
        >
          <div className="relative z-0 mb-6 w-full group">
            <motion.input
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
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
            <motion.input
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
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
            <motion.input
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
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

            <motion.button
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.1 }}
              className="custom-btn px-3"
            >
              SEND
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
