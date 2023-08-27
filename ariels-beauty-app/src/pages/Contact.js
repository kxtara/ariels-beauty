import React from "react";
import Hero from "../components/Hero/Hero";
import Subtitle from "../components/Subtitle/Subtitle";
function Contact() {
  return (
    <div className="">
      <Hero
        title="Celebrating the beauty of women, one strand at a time."
        className='absolute top-[45%] right-8 font-bold text-right w-[15rem] text-[#f8f8f8d9] font-["Kameron"] text-xl'
      />
      <Subtitle title="Contact" />
      <form className="flex flex-col justify-center items-center">
        <label
          for="name"
          className="-ml-[10rem] pb-2 font-semibold font-['Inter'] text-base"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Phillips"
          className="border-[1px] w-[13rem] placeholder:pl-2 rounded-sm py-1"
        />

        <label
          for="email"
          className="-ml-[10rem] mt-5 pb-2 font-semibold font-['Inter'] text-base"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="JohnPhillips@gmail.com"
          className="border-[1px] w-[13rem] placeholder:pl-2 rounded-sm py-1"
          required
        />

        <label
          for="phone"
          className="-ml-[10rem] mt-5 pb-2 font-semibold font-['Inter'] text-base"
        >
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="234-567-8910"
          className="border-[1px] w-[13rem] placeholder:pl-2 rounded-sm py-1"
          required
        />

        <label
          for="message"
          className="-ml-[9rem] mt-5 pb-2 font-semibold font-['Inter'] text-base"
          required
        >
          Message
        </label>
        <textarea
          name="message"
          row="8"
          col="8"
          className="border-[1px] w-[13rem] mb-14 placeholder:pl-2 rounded-sm"
          placeholder="Enter message here..."
        ></textarea>
      </form>
    </div>
  );
}

export default Contact;
