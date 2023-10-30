import React, { useState } from "react";
import Hero from "../components/Hero";
import Subtitle from "../components/Subtitle";
import ServiceCards from "../components/ServiceCards";
import SplideSlider from "../components/Slider";
import { useData } from "../data/DataProvider";

function Services() {
  // State for managing the title and selected service
  const [title, setTitle] = useState("Popular Services");
  const [service, setService] = useState("Featured");

  // State for controlling the display of additional content
  const [showMore, setShowMore] = useState(false);

  // Fetch data from 'DataProvider'
  const data = useData();

  // Initialize an array for slide data
  const slide = data.map((item) => ({
    service: [item.data[0].logoUrl, item.collectionName, item.data],
  }));

  // Handle the click event on the slider item
  const handleSliderItem = (itemService) => {
    setTitle(itemService);
    setService(itemService);
    // Reset the showMore state when a slider item is clicked
    setShowMore(false);
  };

  return (
    <>
      <Hero
        title="Our Services"
        className="text-3xl text-center top-1/2 left-16"
      />
      <section className="py-2 -mb-3 mt-3">
        <SplideSlider items={slide} onItemClick={handleSliderItem} />
      </section>
      <Subtitle title={title} />
      <ServiceCards
        service={service}
        showMore={showMore}
        setShowMore={setShowMore}
      />
    </>
  );
}

export default Services;
