import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";
import GlobeComponent from "./GlobeComponent.jsx";
import ContactForm from "./ContactForm.jsx";

export default function Contact({ biggerThan1000 }) {
  return (
    <section id="Contact" className="sections flex flex-wrap justify-center lg:justify-start text-center lg:text-start">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={''}
      >
        <h2 className="font-black text-7xl mb-5 gradient-title-contact">
          Contact me
        </h2>
        <p
          className={`text-text_secondary text-lg ${
            !biggerThan1000 ? "w-10/12" : "w-full"
          }`}
        >
        If your interested in chatting you can reach me at {" "}
          <Tooltip
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: -10 },
            }}
            content={"Mailto"}
            placement="bottom-end"
            className="shadow-main_black shadow-md"
          >
            <a
              href="mailto:andrewhowran@gmail.com"
              className="underline text-main_white cursor-pointer font-semibold"
              target={"_blank"}
            >
              andrewhowran@gmail.com
            </a>
          </Tooltip>
        </p>

        <ContactForm />
      </motion.div>

      <div className="self-end w-6/12">
        <GlobeComponent />
      </div>
    </section>
  );
}
