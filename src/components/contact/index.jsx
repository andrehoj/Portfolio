import React from "react";

function contact(props) {
  return (
    <div className="pt-44 ml-20 max-w-2xl flex flex-col gap-5 mb-20">
      <h2 className="title-text">Contact me</h2>
      <p className={` ${!props.biggerThan1000 ? "w-10/12" : "w-full"}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eligendi
        consectetur iste illo nam veniam totam harum et beatae. Sapiente facere
        iusto!
      </p>
      <form action="" className="flex flex-col w-10/12 gap-3 ">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          className="bg-slate-600 rounded-3xl p-3 pl-6 focus:outline-text_color outline-none"
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          className="bg-slate-600 rounded-3xl p-3 pl-6 focus:outline-text_color outline-none"
        />
        <input
          type="text"
          name="subject"
          id=" "
          placeholder="Subject"
          className="bg-slate-600 rounded-3xl p-3 pl-6 focus:outline-text_color outline-none"
        />
        <textarea
          name="message"
          id=""
          className="bg-slate-600 rounded-3xl p-3 pl-6 h-40 focus:outline-text_color outline-none"
          placeholder="Message"
          resize="none"
        ></textarea>

        <button className="self-end text-text_color border-text_color border-2 justify-center mr-10 rounded-lg px-3 py-1 bg-third hover:bg-text_color hover:text-third transition-all duration-200 ease-linear tracking-widest">
          SEND
        </button>
      </form>
    </div>
  );
}

export default contact;
