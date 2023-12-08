import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./data/DataProvider.jsx";
import { BookingProvider } from "./components/BookingContext.jsx";
import { CalendarProvider } from "./components/CalendarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <BookingProvider>
        <CalendarProvider>
          <App />
        </CalendarProvider>
      </BookingProvider>
    </DataProvider>
  </React.StrictMode>
);
