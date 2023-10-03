import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Popup from "./Popup";

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

  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleClick = () => setPopupOpen(true);
  return (
    <>
      <Popup isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen} />
      <form
        className="flex flex-col justify-center items-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="border-b-2 pb-4 mb-6 w-[19rem]">
          <label htmlFor="user_name" className="font-semibold text-[#4D4D4D]">
            Name:
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="John Phillips"
            className="placeholder: text-sm ml-7"
            required
          />
        </div>
        <div className="border-b-2 pb-4 mb-6 w-[19rem]">
          <label htmlFor="email" className="font-semibold pr-12 text-[#4D4D4D]">
            Email:
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="JohnPhillips@gmail.com"
            className="placeholder: text-sm -ml-4"
            required
          />
        </div>
        <div className="border-b-2 pb-4 mb-6 w-[19rem]">
          <label htmlFor="phone" className="font-semibold text-[#4D4D4D]">
            Phone:
          </label>
          <input
            type="tel"
            name="user_phone"
            placeholder="(234)-567-xxxx"
            className="placeholder: text-sm ml-7"
          />
        </div>
        <div className="border-b-2 pb-4 mb-6 w-[19rem]">
          <label
            htmlFor="inquiry"
            className="font-semibold text-[#4D4D4D] mr-8"
          >
            Inquiry:
          </label>
          <select name="inquiry" className="text-gray-400 text-sm">
            <option className=" text-sm">Choose one...</option>
            <option>Cancel</option>
            <option>Refund</option>
            <option>Services</option>
            <option>Other</option>
          </select>
        </div>

        <div className="border-b-2 mb-11 w-[19rem]">
          <label
            htmlFor="message"
            className="font-semibold text-[#4D4D4D]"
            required
          >
            Message:
          </label>
          <textarea
            name="message"
            row="18"
            col="18"
            className="placeholder:text-sm placeholder:pl-1 block ml-[5rem] -mt-5"
            placeholder="Enter message here..."
            required
          />
        </div>
        <input
          onClick={handleClick}
          className="border-[1px] rounded-md py-1 px-7 mb-11 bg-[#4D4D4D] text-white font-semibold"
          type="submit"
          value="SEND MESSAGE"
        />
      </form>
    </>
  );
}
