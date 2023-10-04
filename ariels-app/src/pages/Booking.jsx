import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero";
export default function Booking() {
  const [searchParams] = useSearchParams();

  const { title, price, image, imageAlt } = Object.fromEntries(
    searchParams.entries()
  );

  return (
    <>
      <Hero title="hello" />
      <div className="bg-[#fffdfd] border-[1px] border-[rgba(30, 30, 30, 43%)] rounded-[0.75rem] w-[24rem] m-auto mt-7 mb-7 flex">
        <img
          className="w-[9rem] rounded-tl-[0.3125rem] rounded-bl-[0.3125rem]"
          src={image}
          alt={imageAlt}
        />
        <div className="ml-3">
          <h4 className="mt-4 font-bold uppercase">{title}</h4>
          <h3 className="font-semibold ">{price}</h3>
          <p>
            <span className="font-semibold">Terms:</span>
            blag lah mdidm
          </p>
        </div>
      </div>
    </>
  );
}
