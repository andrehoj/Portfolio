import GlobeComponent from "./components/GlobeComponent.jsx";
import ContactForm from "./components/ContactForm.jsx";

export default function Contact() {
  return (
    <div className="min-h-screen lg:text-left overflow-y-hidden relative z-10 flex items-center justify-center overflow-x-hidden text-center  2xl:justify-start 2xl:text-left">
      <div className="w-9/12 self-start 2xl:w-7/12">
        <h2 className="gradient-title-contact page-title  m-auto  2xl:m-0">
          Contact me
        </h2>

        <p className={`text-lg text-center 2xl:text-left text-text_secondary`}>
          If your interested in chatting you can reach me here
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

      <div className="pointer-events-none absolute  z-0 hidden min-w-fit opacity-20 xsm:block  md:top-90 2xl:right-10  2xl:opacity-80">
        <GlobeComponent />
      </div>
    </div>
  );
}
