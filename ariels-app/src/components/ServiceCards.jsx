import React from "react";
import Card from "./Card";
import { useData } from "../data/DataProvider";

function ServiceCards({ service, showMore, setShowMore }) {
  const data = useData()
  // console.log('service :',service)
  if(!data) return null
  return (
    <>
      {data.map((items) => {
        return items.collectionName === service
          ? items.data.map((item) => {
              const {
                alt,
                description,
                detailedDescription,
                id,
                imageUrl,
                price,
                title,
              } = item;
              return (
                <Card
                  title={title}
                  imageAlt={alt}
                  key={id}
                  image={imageUrl}
                  description={description}
                  detailedDescription={detailedDescription}
                  price={price}
                  showMore={showMore}
                  setShowMore={setShowMore}
                  id = {id}
                />
              );
            })
          : null;
      })}
    </>
  );
}

export default ServiceCards;

/*
braid.png

hair-washing (2).png

wig.png

woman.png

*/