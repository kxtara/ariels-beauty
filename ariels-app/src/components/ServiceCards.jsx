import Card from "./Card";
import { useData } from "../data/DataProvider";

function ServiceCards({ service, showMore, setShowMore }) {
  const data = useData()
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
                collectionName
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
                  serviceType={collectionName}
                />
              );
            })
          : null;
      })}
    </>
  );
}

export default ServiceCards;