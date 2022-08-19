import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers.js";
import { capitalizeFirstLetter } from "../../utils/helpers.js";
import { FcCheckmark } from "react-icons/fc";

export default function Contact({ biggerThan1000, innerRef, biggerThan750 }) {
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
    <section id="Contact" className="sections" ref={innerRef}>
      <div
        className={` ${
          biggerThan750 ? "ml-20" : "m-auto text-center items-center"
        } max-w-2xl flex flex-col gap-5`}
      >
        <h2 className="title-text">Contact me</h2>
        <p className={` ${!biggerThan1000 ? "w-10/12" : "w-full"}`}>
          I would love to hear from you. Shoot me a message and I will get back
          to you as soon as I can.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="flex flex-col w-10/12 gap-3  "
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            className="bg-slate-600 p-3 pl-6 border-none focus:border-none outline-none"
            onBlur={handleChange}
          />
          <input
            required
            type="email"
            name="user_email"
            placeholder="Email"
            className="bg-slate-600 p-3 pl-6 border-none focus:border-none outline-none "
            onBlur={handleChange}
          />
          <textarea
            required
            name="message"
            className="bg-slate-600  p-3 pl-6 h-40 border-none focus:border-none outline-none "
            placeholder="Message"
            resize="none"
            onBlur={handleChange}
          ></textarea>
          <div
            className={`${
              !errorMessage ? "justify-end" : "justify-between "
            }   flex align-center `}
          >
            {errorMessage && (
              <div className="inline whitespace-nowrap text-xl transition-all duration-100">
                {capitalizeFirstLetter(errorMessage)}
              </div>
            )}

            <button
              // disabled when an email is successfully sent, can bots click the send btn?
              className={` text-blue border-blue border justify-center mr-2 px-3 py-1 bg-third hover:bg-blue hover:text-dark_blue  transition-all duration-200 ease-linear tracking-widest font-bold active:scale-75 btns`}
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
