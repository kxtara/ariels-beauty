import React from "react";
import Card from "../Card";

function ServiceCards({ service, showMore, setShowMore }) {
  return (
    <>
      {service.map((item) => (
        <Card
          title={item.title}
          image={item.image}
          imageAlt={item.imageAlt}
          description={item.description}
          price={item.price}
          detailedDescription={item.detailedDescription}
          key={item.id} // unique key for each Card component
          showMore={showMore} // Boolean indicating whether to show more details
          setShowMore={setShowMore} // Function to update the 'showMore' state
        />
      ))}
    </>
  );
}
export default ServiceCards;
