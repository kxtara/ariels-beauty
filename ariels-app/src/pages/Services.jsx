import React, { useState } from "react";
import Hero from "../components/Hero";
import Subtitle from "../components/Subtitle";
import ServiceCards from "../components/ServiceCards/ServiceCards";
import { featured,slideItems } from "../components/ServiceCards/ServicesInfo";
import SplideSlider from "../components/Slider";

function Services() {
  const [title, setTitle] = useState("Popular Services");
  const [service, setService] = useState(featured);

  // This will change the display when you click more/X button
  const [showMore, setShowMore] = useState(false);

  // This will change the card details and subtitle based on the service clicked
  const handleSliderItem = (itemTitle, itemService) => {
    setTitle(itemTitle);
    setService(itemService);

    // when a sliderItem is click the card display is set back to its default
    setShowMore(false);
  };

  

  return (
    <>
      <Hero
        title="Our Services"
        className="text-3xl text-center top-1/2 left-16"
      />
      <section className="py-2 -mb-3 mt-3">
      {/* items takes in an array of objects */}
        <SplideSlider items={slideItems} onItemClick={handleSliderItem} />
      </section>
      <Subtitle title={title} />
      {/* Passing showMore and setShowMore to ServiceCards, which will then pass them to the Card component */}
      <ServiceCards
        service={service}
        showMore={showMore}
        setShowMore={setShowMore}
      />
    </>
  );
}

export default Services;