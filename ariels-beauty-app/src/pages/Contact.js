import Hero from "../components/Hero";
import Subtitle from "../components/Subtitle";
import Form from "../components/Form";
export default function Contact() {
  return (
    <div className="">
      <Hero
        title="Celebrating the beauty of women, one strand at a time."
        className='absolute top-[45%] right-8 font-bold text-right w-[15rem] text-[#f8f8f8d9] font-["Kameron"] text-xl'
      />
      <Subtitle title="Contact" />
      <Form />
    </div>
  );
}