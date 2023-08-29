import React from "react";
import Card from "../Card/Card";

function ServiceCards({ service, showMore, setShowMore }) {
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
          showMore={showMore} // Boolean indicating whether to show more details
          setShowMore={setShowMore} // Function to update the 'showMore' state
        />
      ))}
    </div>
  );
}
export default ServiceCards;
