import { useState,useContext,createContext } from "react";

const CalendarContext = createContext()

export const CalendarProvider = ({children}) => {
  const [calendarData,setCalendarData] = useState({})

  const setData = (deposit,formattedTime) => {setCalendarData({deposit,formattedTime})}
  console.log("CalendarData:",calendarData)
  return(
    <CalendarContext.Provider value={{ calendarData, setData }}>
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendarContext = () => {
  return useContext(CalendarContext)
}