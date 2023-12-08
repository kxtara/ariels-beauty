import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { getDay, setHours, setMinutes, format, parse } from "date-fns";
import Confirmation from "./Confirmation";
import { db } from "../config/firebase";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { setDoc, collection, onSnapshot, doc } from "firebase/firestore";
import { useCalendarContext } from "./CalendarContext";
export default function Calendar({ deposit, serviceId, serviceType }) {
  const { setData } = useCalendarContext();

  // Initialize state for the selected date and time
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 7)
  );
  const [timeSlots, setTimeSlots] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [unavailableTimes, setUnavailableTimes] = useState([]);

  // Format the selected date, time, and month using date-fns
  const formattedTime = format(startDate, "MMM EEE d, yyyy - h:mm aa");

  const handleTimeClick = async () => {
    try {
      // add the selected time to the specific UnavailableTimes subcollection
      const serviceRef = collection(
        db,
        `Services/Root/${serviceType}/${serviceId}/UnavailableTimes`
      );

      // Add startDate to document inside the Unavailable times collection
      const dateAndTimeRef = doc(serviceRef, formattedTime);

      setData(deposit, formattedTime);
      await setDoc(dateAndTimeRef, { time: startDate });
    } catch (error) {
      console.error("Error in handleTimeClick,Calendar Component:", error);
    }
  };

  const getUnavailableTimesForSelectedDay = () => {
    const selectedDay = startDate.toDateString();
  
    const selectedDayTimes = unavailableTimes
      .filter((time) => time instanceof Date && time.toDateString() === selectedDay)
      .map((time) => setHours(setMinutes(new Date(time), 0), time.getHours()));
  
    return selectedDayTimes || [];
  };

  const generateAvailableTimeSlots = () => {
    const excludedTimes = getUnavailableTimesForSelectedDay().filter((time) => time instanceof Date);

    const times = [];

    for (let i = 7; i < 20; i++) {
      if (
        i !== 12 && 
        i !== 13 &&
        (!excludedTimes.length || !excludedTimes.some(time => time.getHours() === i)) 
        ) {
        let time = setHours(setMinutes(startDate, 0), i);
        times.push(time);
      }
    }
    setTimeSlots(times);
  };


  useEffect(() => {

    // fetch unavailable times from the specific UnavailableTimes subcollection
    const unsubscribe = onSnapshot(
      collection(
        db,
        `Services/Root/${serviceType}/${serviceId}/UnavailableTimes`
      ),
      (snapshot) => {
        // This function is called whenever there are changes to the data
        // in the UnavailableTimes subcollection.
        // It receives a snapshot of the current data.
        try {
          const times = snapshot.docs.flatMap((dateDoc) => {
            const date = dateDoc.id;

            // Adjust the parsing logic based on the date string format
            const parsedDate = parse(
              date,
              "MMM EEE d, yyyy - h:mm aa",
              new Date()
            );
            return parsedDate;
          });
          // Update available time slots based on new unavailable times
          generateAvailableTimeSlots();

          // Process the snapshot data here.
        } catch (error) {
          console.error(
            "Error in onSnapshot callback, Calendar Component:",
            error
          );
        }
      }
    );
    return () => unsubscribe();
  }, [serviceType, serviceId, startDate]);

  // TODO remove all unavailable times from previous month on the first of every month from the firestore

  // NOTE - I've contained calendar effects to the respective components ( only the selected component will disable times instead of all components)

  // TODO - contain excluded times to respective dates instead of excluding times on all dates

  return (
    <>
      {isPopupOpen && (
        <Confirmation
          isPopupOpen={isPopupOpen}
          setPopupOpen={setPopupOpen}
          booking={formattedTime}
        />
      )}
      <DatePicker
        key={serviceId}
        excludeTimes={getUnavailableTimesForSelectedDay()}
        minDate={new Date()}
        maxDate={new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0)}
        className="flex flex-col m-auto mt-6 mb-4 rounded-md border-[.01rem] text-center"
        calendarClassName="text-[#6C705F]" // Style for time slots
        showTimeSelect // Show time slots
        timeIntervals={60} // Time intervals (e.g., 10 AM, 11 AM)
        selected={startDate} // Display the currently selected date and time
        onChange={(date) => setStartDate(date)} // Update the selected date and time
        filterDate={(date) => getDay(date) !== 0 && getDay(date) !== 6} // Disable weekends
        withPortal // Display the calendar as a popup
        portalId="root-portal"
        includeTimes={timeSlots} // Include the filtered times
        value={startDate} // Set the initial input value
      />
      {deposit ? (
        <Link
          onClick={handleTimeClick}
          className="border-[1px] py-1 px-5 rounded-md flex m-auto mb-8 text-white bg-[#6C705F] w-[4.2rem]"
          to="/payment"
        >
          Pay
        </Link>
      ) : (
        <button
          type="button"
          className="border-[1px] px-11 py-1 rounded-md flex m-auto mb-8 text-white bg-[#6C705F]"
          onClick={() => setPopupOpen(true)}
        >
          Confirm
        </button>
      )}
    </>
  );
}
