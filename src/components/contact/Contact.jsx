import { motion } from "framer-motion";
import GlobeComponent from "./GlobeComponent.jsx";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative sections contact-section flex justify-center 2xl:justify-start items-center z-10 text-center 2xl:text-left 2xl:ml-32 m-0 overflow-x-hidden"
    >
      <div
       
        className={"w-9/12 2xl:w-7/12 self-start"}
      >
        <h2 className="font-black text-5xl sm:text-7xl gradient-title-contact  w-fit m-auto 2xl:m-0 font-main_font">
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
      </div>

      <div className="hidden min-w-fit xsm:block pointer-events-none absolute md:top-60 2xl:top-auto  2xl:right-40 z-0 opacity-20 2xl:opacity-80">
        <GlobeComponent />
      </div>
    </section>
  );
}
