import { motion } from "framer-motion";
import GlobeComponent from "./GlobeComponent.jsx";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative sections contact-section flex justify-center 2xl:justify-start items-center z-10 w-full text-center 2xl:text-left 2xl:ml-32 m-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={"w-9/12 2xl:w-7/12 self-start"}
      >
        <h2 className="font-black text-5xl sm:text-7xl gradient-title-contact  w-fit m-auto 2xl:m-0">
          Contact me
        </h2>

        <p className={`text-text_secondary text-lg mt-5`}>
          If your interested in chatting you can reach me here{" "}
        </p>

        <a
          href="mailto:andrewhowran@gmail.com"
          className="underline text-theme_yellow text-base font-light block cursor-pointer "
          target={"_blank"}
        >
          andrewhowran@gmail.com
        </a>

        <ContactForm />
      </motion.div>

      <div className="hidden xsm:block  pointer-events-none absolute mobile-globe-position md:top-96 2xl:top-auto  2xl:right-40 z-0 opacity-20 2xl:opacity-80">
        <GlobeComponent />
      </div>
    </section>
  );
}
