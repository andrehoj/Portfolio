"use client"

import { motion } from "framer-motion";
import GlobeComponent from "./components/GlobeComponent.jsx";
import ContactForm from "./components/ContactForm.jsx";

export default function Contact() {
  return (
    <motion.section
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -30, opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="Contact"
      className="sections contact-section relative z-10 m-0 flex items-center justify-center overflow-x-hidden text-center 2xl:ml-32 2xl:justify-start 2xl:text-left"
    >
      <div className={"w-9/12 self-start 2xl:w-7/12"}>
        <h2 className="gradient-title-contact m-auto w-fit font-display  text-5xl font-black sm:text-7xl 2xl:m-0">
          Contact me
        </h2>

        <p className={`mt-5 text-lg text-text_secondary`}>
          If your interested in chatting you can reach me here{" "}
        </p>

        <a
          href="mailto:andrewhowran@gmail.com"
          className="m-auto block w-fit cursor-pointer text-base font-light text-theme_yellow underline 2xl:m-0"
          target={"_blank"}
          rel="noreferrer"
        >
          andrewhowran@gmail.com
        </a>

        <ContactForm />
      </div>

      <div className="pointer-events-none absolute z-0 hidden min-w-fit opacity-20 xsm:block  md:top-60 2xl:right-40 2xl:top-auto 2xl:opacity-80">
        <GlobeComponent />
      </div>
    </motion.section>
  );
}