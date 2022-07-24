import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers.js";
import { capitalizeFirstLetter } from "../../utils/helpers.js";

export default function Contact({ biggerThan1000, innerRef }) {
  const [formState, setFormState] = useState({
    name: "",
    from_email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  //const { name, from_email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "user_email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState });
    }
  };

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      // emailjs
      //   .sendForm(
      //     { service_id: process.env.SERVICE_ID },
      //     { template_id: process.env.TEMPLATE_ID },
      //     form.current,
      //     { public_key: process.env.PUBLIC_KEY }
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result);
      //       e.target.reset();
      //       console.log("email sent!");
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );
    }
  };

  return (
    <section id="Contact" className="sections" ref={innerRef}>
      <div className="pt-32 ml-20 max-w-2xl flex flex-col gap-5 mb-20">
        <h2 className="title-text">Contact me</h2>
        <p className={` ${!biggerThan1000 ? "w-10/12" : "w-full"}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eligendi
          consectetur iste illo nam veniam totam harum et beatae. Sapiente
          facere iusto!
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="flex flex-col w-10/12 gap-3 "
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-slate-600 p-3 pl-6 border-none focus:border-none outline-none focus:outline-none"
            onBlur={handleChange}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="bg-slate-600 p-3 pl-6 border-none focus:border-none outline-none focus:outline-none"
            onBlur={handleChange}
          />
          <textarea
            name="message"
            className="bg-slate-600  p-3 pl-6 h-40 border-none focus:border-none outline-none focus:outline-none"
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
              <div className="inline whitespace-nowrap text-xl">
                {capitalizeFirstLetter(errorMessage)}
              </div>
            )}

            <button
              // disabled when an email is successfully sent, can bots click the send btn?
              className={` text-lightest_blue border-lightest_blue border justify-center mr-2 px-3 py-1 bg-third hover:bg-lightest_blue hover:text-lighter_blue  transition-all duration-200 ease-linear tracking-widest font-bold active:scale-75 btns`}
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
