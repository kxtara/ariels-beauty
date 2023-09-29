import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function form() {
  const form = useRef();
  const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const templatId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templatId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form
      className="flex flex-col justify-center items-center"
      ref={form}
      onSubmit={sendEmail}
    >
      <label
        for="user_name"
        className="-ml-[10rem] pb-2 font-semibold font-['Inter'] text-base"
      >
        Name
      </label>
      <input
        type="text"
        name="user_name"
        placeholder="John Phillips"
        className="border-[1px] w-[13rem] placeholder:pl-2 rounded-sm py-1"
        required
      />

      <label
        for="email"
        className="-ml-[10rem] mt-5 pb-2 font-semibold font-['Inter'] text-base"
      >
        Email
      </label>
      <input
        type="email"
        name="user_email"
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
        name="user_phone"
        placeholder="234-567-8910"
        className="border-[1px] w-[13rem] placeholder:pl-2 rounded-sm py-1"
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
        required
      />
      <input
        className="border-[1px] w-[5rem] placeholder:pl-2 rounded-sm py-1 mb-4"
        type="submit"
        value="Send"
      />
    </form>
  );
}
