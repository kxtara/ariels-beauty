import {createContext, useContext, useState } from "react";

const BookingContext = createContext()

export const BookingProvider = ({children}) => {
    const [bookingData,setBookingData] = useState({})

    const setData = (title,price,image,imageAlt,id) => {
        setBookingData({title,price,image,imageAlt,id})
    }
    console.log("BookingProvider - bookingData:",bookingData)
    return(
        <BookingContext.Provider value={{ bookingData , setData }}>
        {children}
        </BookingContext.Provider>
    )
}

export const useBookingContext = () => {
    return useContext(BookingContext)
}