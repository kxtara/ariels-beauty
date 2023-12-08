import Hero from "../components/Hero";
import { useCalendarContext } from "../components/CalendarContext";

export default function Payment(){
   const {calendarData} = useCalendarContext()
   const {deposit,formattedTime: date} = calendarData
   //console.log(calendarData)
   
   // Check if deposit is a function before invoking it
   const depositValue = typeof deposit === 'function' ? deposit() : deposit
    return (
    <>
    <Hero title='testing' />
     <h1>Hello</h1> 
     <p>
        display data: <br/> {depositValue} <br />
        {date}
     </p>  
    </>
    )
}