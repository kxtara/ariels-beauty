import {createContext, useContext, useState } from "react";

const BookingContext = createContext()

export const BookingProvider = ({children}) => {
    const [bookingData,setBookingData] = useState({})

    const setData = (title,price,image,imageAlt,id,serviceType) => {
        setBookingData({title,price,image,imageAlt,id,serviceType})
    }
    return(
        <BookingContext.Provider value={{ bookingData , setData }}>
        {children}
        </BookingContext.Provider>
    )
}

export const useBookingContext = () => {
    return useContext(BookingContext)
}