"use client";

import { motion } from "framer-motion";
import GlobeComponent from "./components/GlobeComponent";
import ContactForm from "./components/ContactForm";

export default function page() {
  return (
    <div className="min-h-screen lg:text-left overflow-y-hidden relative z-10 flex items-center justify-center overflow-x-hidden text-center  2xl:justify-start 2xl:text-left">
      <div className="w-9/12 self-start 2xl:w-7/12">
        <h2 className="gradient-title-contact page-title  m-auto  2xl:m-0">
          Contact me
        </h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className={`text-md text-center 2xl:text-left text-secondary_text`}
        >
          If your interested in chatting you can reach me here
        </motion.p>

        <motion.a
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          href="mailto:andrewhowran@gmail.com"
          className="m-auto block w-fit cursor-pointer text-base font-light text-theme_yellow underline 2xl:m-0"
          target={"_blank"}
          rel="noreferrer"
        >
          andrewhowran@gmail.com
        </motion.a>

        <ContactForm />
      </div>

      <div className="pointer-events-none absolute z-0 hidden min-w-fit opacity-10 sm:block 2xl:right-10 2xl:opacity-70">
        <GlobeComponent />
      </div>
    </div>
  );
}
