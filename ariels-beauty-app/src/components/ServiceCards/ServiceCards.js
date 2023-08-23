import React from "react";
import Card from "../Card/Card";

function ServiceCards({service}) {
  return (
    <div>
      {service.map((item, index) => (
        <Card
          title={item.title}
          image={item.image}
          imageAlt={item.imageAlt}
          description={item.description}
          price={item.price}
          detailedDescription={item.detailedDescription}
          key={index} // unique key for each Card component
        />
      ))}
    </div>
  );
}
export default ServiceCards;