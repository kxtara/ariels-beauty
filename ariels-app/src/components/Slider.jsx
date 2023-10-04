import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function SplideSlider({ items, onItemClick }) {
  // Define Splide options for the slider
  const splideOptions = {
    perPage: 4,
    focus: 0,
    omitEnd: true,
  };

  return (
    // Create a Splide slider with specified options
    <Splide options={splideOptions} className="flex">
      {items.map((item, index) => (
        // Create a slide for each item in the 'items' array
        <SplideSlide key={index}>
          <div onClick={() => onItemClick(item.service[1], item.service[2])}>
            {/* Display an image with a click event */}
            <img
              className="bg-[#6C705F] rounded-[6rem] w-[4rem] h-[4rem] p-3 ml-4 cursor-grab"
              src={item.service[0]}
              alt={`${item.service[1]} logo`}
            />
            {/* Display the service name */}
            <p className="font-bold font-['Katibeh'] ml-[1.76rem]">
              {item.service[1]}
            </p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
