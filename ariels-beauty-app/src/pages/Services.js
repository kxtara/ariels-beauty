import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import Subtitle from "../components/Subtitle/Subtitle";
import wash from "../assets/images/wash.svg";
import install from "../assets/images/install.svg";
import ponytail from "../assets/images/ponytail.svg";
import braids from "../assets/images/braids.svg";
import ServiceIcon from "../components/ServiceIcon/ServiceIcon";
import ServiceCards from "../components/ServiceCards/ServiceCards";
import {
  washInfo,
  installInfo,
  braidsInfo,
  ponytailInfo,
  featured
} from "../components/ServiceCards/ServicesInfo";
function Services() {
  const [title, setTitle] = useState("Popular Services");
  const [service,setService] = useState(featured)
  const hideIcons = (innerText,name) => {
    setTitle(innerText);
    setService(name)
  };
  return (
    <div>
      <Hero
        title="Our Services"
        className="text-3xl text-center top-1/2 left-16"
      />
      {/* Most likely will turn this into a component */}
      <div className="flex justify-between py-2 gap-3 px-2 -mb-3">
        <ServiceIcon
          onClick={() => hideIcons("Wash",washInfo)}
          icon={wash}
          xAxis={-4}
          yAxis={-3}
          text="Wash"
        />
        <ServiceIcon
          onClick={() => hideIcons("Install",installInfo)}
          icon={install}
          xAxis={-58}
          yAxis={-35}
          text="Install"
        />
        <ServiceIcon
          onClick={() => hideIcons("Braids",braidsInfo)}
          icon={braids}
          xAxis={-18}
          yAxis={-13}
          text="Braids"
        />
        <ServiceIcon
          onClick={() => hideIcons("Ponytail",ponytailInfo)}
          icon={ponytail}
          xAxis={-8}
          yAxis={-8}
          text="Ponytail"
        />
      </div>

      <Subtitle title={title} />
      <ServiceCards service={service}/>
    </div>
  );
}

export default Services;
