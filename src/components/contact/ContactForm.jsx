import { capitalizeFirstLetter } from "../../utils/helpers.js";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { validateEmail } from "../../utils/helpers.js";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = ({ target }) => {
    setSuccessMessage("");
    if (target.name === "user_email") {
      const isValid = validateEmail(target.value);
      if (!isValid) {
        setErrorMessage("Email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!target.value.trim().length) {
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

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (errorMessage) {
      setErrorMessage("You must fill out all fields.");
      setLoading(false);
      return null;
    }

    try {
      const result = await emailjs.sendForm(
        "service_bbrsffm",
        "template_8y9jxkw",
        form.current,
        "8268wx-YQfeyZJ_Gb"
      );

      if (result.text === "OK" && result.status === 200) {
        e.target.reset();
        setErrorMessage("");
        setSuccessMessage("I got your message! 🎉");
        setLoading(false);
      }
    } catch (error) {
      if (!errorMessage) {
        setErrorMessage(
          "⚠️ Something went wrong, You can reach me at the email above."
        );
        setLoading(false);
      }
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mx-auto mt-5 flex flex-col gap-3 text-start md:w-9/12 2xl:mx-0 2xl:w-8/12"
    >
      <div className="group relative z-10 mb-6 w-full">
        <motion.input
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          type="text"
          name="name"
          id="name"
          className="peer block w-full appearance-none border-0 border-b border-gray-700 bg-transparent px-0 py-2.5   text-gray-400 focus:border-contact_gradient focus:outline-none  focus:ring-0"
          placeholder=" "
          required
          onBlur={handleChange}
        />
        <label
          htmlFor="name"
          className="absolute top-3  -z-10 origin-[0] -translate-y-6 scale-75 transform border-contact_gradient text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-contact_gradient"
        >
          Name
        </label>
      </div>
      <div className="group relative z-0 mb-6 w-full">
        <motion.input
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          type="email"
          name="email"
          id="email"
          className="peer block w-full appearance-none border-0 border-b border-gray-700 bg-transparent px-0 py-2.5  text-gray-400 focus:border-contact_gradient focus:outline-none  focus:ring-0"
          placeholder=" "
          required
          onBlur={handleChange}
        />
        <label
          htmlFor="floating_email"
          className="absolute top-3  -z-10  origin-[0] -translate-y-6 scale-75 transform border-contact_gradient text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0  peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-contact_gradient"
        >
          Email
        </label>
      </div>
      <div className="group relative z-0 mb-6 w-full">
        <motion.input
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          type="text"
          name="message"
          id=""
          className="peer block w-full appearance-none border-0 border-b border-gray-700 bg-transparent px-0 py-2.5   text-gray-400 focus:border-contact_gradient focus:outline-none  focus:ring-0"
          placeholder=" "
          required
          onBlur={handleChange}
        />
        <label
          htmlFor="message"
          className="absolute top-3  -z-10  origin-[0] -translate-y-6 scale-75 transform border-contact_gradient text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0  peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-contact_gradient"
        >
          Message
        </label>
      </div>

      <div
        className={`font-light ${
          !errorMessage && !successMessage ? "justify-end" : "justify-between"
        }   align-center flex `}
      >
        {successMessage && (
          <div className="mr-2  inline font-black text-green-500 transition-all duration-100 sm:text-lg sm:text-xl">
            {capitalizeFirstLetter(successMessage)}
          </div>
        )}
        {errorMessage && (
          <div className="mr-2  inline font-black text-red-500 transition-all duration-100 sm:text-xl">
            {capitalizeFirstLetter(errorMessage)}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.1 }}
        >
          <button
            className={`${
              loading ? "pointer-events-none opacity-50" : null
            } flex items-center rounded-sm border border-theme_green px-4 py-1.5   text-lg  font-medium text-theme_green transition-all duration-200 ease-linear hover:bg-theme_green  hover:text-main_black active:scale-75`}
          >
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="mr-2 inline h-4 w-4 animate-spin fill-theme_green  text-gray-700"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : null}{" "}
            SEND
          </button>
        </motion.div>
      </div>
    </form>
  );
}
