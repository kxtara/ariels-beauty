import React from "react";
import Hero from "../components/Hero/Hero";
import Subtitle from "../components/Subtitle/Subtitle";
import Card from "../components/Card/Card";
import boxbraid from "../assets/images/boxbraid.jpg";
import wash from "../assets/images/wash.svg"
import install from "../assets/images/install.svg"
import ponytail from "../assets/images/ponytail.svg"
import braids from "../assets/images/braids.svg"
import ServiceIcon from "../components/ServiceIcon/ServiceIcon";
function Services() {
  return (
    <div>
      <Hero
        title="Our Services"
        className="text-3xl text-center top-1/2 left-16"
      />
      <div className="flex justify-between py-2 gap-6 px-2 -mb-3 overflow-x-scroll">
      <ServiceIcon icon={wash} xAxis={-4} yAxis={-3}text='Wash'/>
      <ServiceIcon icon={install} xAxis={-58} yAxis={-35} text='Install'/>
      <ServiceIcon icon={braids} xAxis={-18} yAxis={-13} text='Braids'/>
      <ServiceIcon icon={ponytail} xAxis={-8} yAxis={-8}text='Ponytail'/>
      <ServiceIcon icon={ponytail} xAxis={-8} yAxis={-8}text='Ponytail'/>
      <ServiceIcon icon={ponytail} xAxis={-8} yAxis={-8}text='Ponytail'/><ServiceIcon icon={ponytail} xAxis={-8} yAxis={-8}text='Ponytail'/>
      </div>
      <Subtitle title="Popular Services" />
      <Card
        title="box braids"
        image={boxbraid}
        imageAlt="lady with box braids"
        description="Our in-house expert in braids will perfect your box braids to Pinterest-worthy levels. "
      />
    </div>
  );
}

export default Services;
