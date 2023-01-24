import { capitalizeFirstLetter } from "../../utils/helpers.js";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { validateEmail } from "../../utils/helpers.js";
import { motion } from "framer-motion";

export default function ContactForm({}) {
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
          errorMessage(
            "Something went wrong. You can reach me at andrewhowran@gmail.com"
          );
        });
    }
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      action=""
      className=" mt-5 flex flex-col w-auto lg:w-10/12 gap-3 text-start"
    >
      <div className="relative z-0 mb-6 w-full group">
        <motion.input
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-700 appearance-none   focus:outline-none focus:ring-0 focus:border-contact_gradient  peer"
          placeholder=" "
          required
          onBlur={handleChange}
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-contact_gradient border-contact_gradient   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <motion.input
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-700 appearance-none   focus:outline-none focus:ring-0 focus:border-contact_gradient  peer"
          placeholder=" "
          required
          onBlur={handleChange}
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-contact_gradient border-contact_gradient  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <motion.input
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          type="text"
          name="message"
          id=""
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-700 appearance-none   focus:outline-none focus:ring-0 focus:border-contact_gradient  peer"
          placeholder=" "
          required
          onBlur={handleChange}
        />
        <label
          htmlFor="message"
          className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-contact_gradient border-contact_gradient  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Message
        </label>
      </div>

      <div
        className={`font-light ${
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
          transition={{ delay: 0.8, duration: 0.1 }}
          className="custom-btn px-3"
        >
          SEND
        </motion.button>
      </div>
    </form>
  );
}