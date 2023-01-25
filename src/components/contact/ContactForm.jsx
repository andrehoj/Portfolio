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
     
      className="mt-5 flex flex-col  2xl:w-10/12 gap-3 text-start"
    >
      <div className="relative z-10 mb-6 w-full group">
        <motion.input
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-700 appearance-none   focus:outline-none focus:ring-0 focus:border-contact_gradient  peer"
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
          className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-700 appearance-none   focus:outline-none focus:ring-0 focus:border-contact_gradient  peer"
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
          className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-700 appearance-none   focus:outline-none focus:ring-0 focus:border-contact_gradient  peer"
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
          !errorMessage && !successMessage ? "justify-end" : "justify-between"
        }   flex align-center `}
      >
        {successMessage && (
          <div className="inline text-sm sm:text-lg transition-all duration-100 mr-2 text-green-500">
            {capitalizeFirstLetter(successMessage)}
          </div>
        )}
        {errorMessage && (
          <div className="inline text-sm sm:text-lg transition-all duration-100 mr-2 text-red-500">
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
              loading ? "opacity-50 pointer-events-none" : null
            } custom-btn px-3 flex items-center`}
          >
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-4 h-4 mr-2 text-gray-700 animate-spin  fill-theme_green"
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
