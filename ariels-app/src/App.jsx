import React from "react";
import AppRouter from "./routes/AppRouter";
import { DataProvider } from "./data/DataProvider";
import './index.css'
function App() {
  return (
    <>
    <DataProvider>
      <AppRouter />
    </DataProvider>
    </>
  );
}

export default App;