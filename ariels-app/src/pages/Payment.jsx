import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero";


export default function Payment(){
    // Retrieve search parameters from the URL.
  const [searchParams] = useSearchParams();

  // Extract data from the search parameters.
  const { deposit, date } = Object.fromEntries(
    searchParams.entries()
  );
    return (
    <>
    <Hero title='testing' />
     <h1>Hello</h1> 
     <p>
        display data: <br/> {deposit} <br />{date}
     </p>  
    </>
    )
}