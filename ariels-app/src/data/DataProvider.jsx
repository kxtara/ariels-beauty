import { createContext, useContext, useEffect, useState } from "react";
import { db, storage } from "../config/firebase";
import { getDocs, collection, doc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

// Create a context to manage and share data throughout the application
const DataContext = createContext();

// DataProvider component that manages and provides data to other components
const DataProvider = ({ children }) => {
  // State to store the service data
  const [data, setData] = useState([]);

  // Define the collections you want to fetch from Firestore
  const collections = ["Braids", "Wash", "Featured", "Install", "Ponytail"];

  // Create a reference to the root document in Firestore
  const rootDocRef = doc(db, "Services", "Root");

  // Create an array of collection references
  const collectionRefs = collections.map((collectionName) => {
    return collection(rootDocRef, collectionName);
  });

  useEffect(() => {
    // Function to get the image URL from Firebase Storage
    const getImageUrl = async (imageReference) => {
      try {
        const imageUrl = await getDownloadURL(ref(storage, imageReference));
        return imageUrl;
      } catch (error) {
        console.error("Error getting image URL:", error);
        return null;
      }
    };

    // Function to fetch service data from Firestore
    const getService = async () => {
      // Create an array of promises to fetch data from each collection
      const dataPromises = collectionRefs.map(async (collectionRef, index) => {
        try {
          const collectionData = await getDocs(collectionRef);

          // Get the name of the current collection
          const collectionName = collections[index];

          // Fetch and process data for each document in the collection
          const data = await Promise.all(
            collectionData.docs.map(async (document) => {
              const imageReference = document.data().image;
              const logoReference = document.data().logo;
              const imageUrl = await getImageUrl(imageReference);
              const logoUrl = await getImageUrl(logoReference);
              // Return data for each document in the collection
              return {
                collectionName,
                imageUrl,
                logoUrl,
                ...document.data(),
                id: document.id,
              };
            })
          );
          // Return data for the current collection
          return { collectionName, data };
        } catch (err) {
          console.error("Error fetching collection data", err);
          return null;
        }
      });

      // Wait for all data promises to resolve
      const serviceData = await Promise.all(dataPromises);

      // Structure the service data and update the state
      const updatedServiceList = serviceData
        .filter((item) => item !== null)
        .map((item) => ({
          collectionName: item.collectionName,
          data: item.data,
        }));
      setData(updatedServiceList);
    };

    // Call the function to fetch service data when the component mounts
    getService();
  }, []);
  // Provide the data to components in the application using the DataContext.Provider
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

// Custom hook to easily access the data within components
const useData = () => useContext(DataContext);

// Export the DataProvider and useData for use in other parts of the application
export { DataProvider, useData };
