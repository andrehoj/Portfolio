import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers.js";
import { capitalizeFirstLetter } from "../../utils/helpers.js";

function Contact(props) {
  const [formState, setFormState] = useState({
    name: "",
    user_email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { user_name, user_email, message } = formState;

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
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      // emailjs
      //   .sendForm(
      //     "SERVICE_ID",
      //     "TEMPLATE_ID",
      //     form.current,
      //     "PUBLIC_KEY"
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //       e.target.reset();
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );
      console.log("email sent!");
    }
  };

  return (
    <section id="Contact" className="sections" ref={props.innerRef}>
      <div className="pt-44 ml-20 max-w-2xl flex flex-col gap-5 mb-20">
        <h2 className="title-text">Contact me</h2>
        <p className={` ${!props.biggerThan1000 ? "w-10/12" : "w-full"}`}>
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
            id=""
            placeholder="Name"
            className="bg-slate-600 p-3 pl-6 border-none focus:border-none outline-none focus:outline-none"
            onBlur={handleChange}
          />
          <input
            type="email"
            name="user_email"
            id=""
            placeholder="Email"
            className="bg-slate-600 p-3 pl-6 border-none focus:border-none outline-none focus:outline-none"
            onBlur={handleChange}
          />
          <textarea
            name="message"
            id=""
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
              // disabled
              className={` text-text_color border-text_color border justify-center mr-5  px-3 py-1 bg-third hover:bg-text_color  hover:text-third transition-all duration-200 ease-linear tracking-widest font-bold active:scale-75`}
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
