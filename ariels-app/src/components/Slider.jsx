import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function SplideSlider({ items, onItemClick }) {
  // Define Splide options for the slider
  const splideOptions = {
    perPage: 4,         // Number of slides displayed per view
    focus: 0,           // Index of the initial focused slide
    omitEnd: true,      // Omit partially visible slides at the end
  };

  // Filter items to exclude those where the first element of the 'service' array is falsy
  const filteredItems = items.filter((item) => item.service[0]);

  return (
    // Create a Splide slider with specified options
    <Splide options={splideOptions} className="flex z-0">
      {filteredItems.map((item, index) => {
        // Create a slide for each item in the 'items' array
        return (
          <SplideSlide key={index}>
            <div onClick={() => onItemClick(item.service[1])}>
            {/* display a logo with the name of the service */}
              <img
                className="bg-[#6C705F] rounded-[6rem] w-[4rem] h-[4rem] p-3 ml-4 cursor-grab"
                src={item.service[0]}
                alt={`${item.service[1]} logo`}
              />
              <p className="font-bold font-['Katibeh'] ml-[1.76rem]">
                {item.service[1]}
              </p>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
