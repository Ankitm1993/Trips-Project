import React, { useState } from "react";
import data from "./data";
import Trip from "./Trip";

function App() {
  const [tour, setTour] = useState(data);
  return (
    <main>
      <section className='container'>
        <h2> {tour.length} Trips Today </h2>
        <Trip tour={tour} setTour={setTour} />
        <button type='button' onClick={() => setTour([])}>
          clear all destinations
        </button>
      </section>
    </main>
  );
}

export default App;
