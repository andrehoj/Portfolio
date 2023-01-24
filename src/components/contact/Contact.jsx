import { motion } from "framer-motion";
import GlobeComponent from "./GlobeComponent.jsx";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  document.addEventListener("click", (e) => console.log(e.target));
  return (
    <section
      id="Contact"
      className="sections flex flex-wrap xl:flex-nowrap justify-center xl:justify-start"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={"w-9/12 xl:w-6/12"}
      >
        <h2 className="font-black text-5xl sm:text-7xl mb-5 gradient-title-contact">
          Contact me
        </h2>
        <p className={`text-text_secondary text-lg`}>
          If your interested in chatting you can reach me at{" "}
        </p>

        <a
          href="mailto:andrewhowran@gmail.com"
          className="underline text-main_white text-base font-light block cursor-pointer"
          target={"_blank"}
        >
          andrewhowran@gmail.com
        </a>

        <ContactForm />
      </motion.div>

      <div className="pointer-events-none">
        <GlobeComponent />
      </div>
    </section>
  );
}
