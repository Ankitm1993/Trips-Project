import React from "react";

const Trip = ({ tour, setTour }) => {
  const removeDestination = (id) => {
    const newTour = tour.filter((destination) => destination.id !== id);
    setTour(newTour);
  };
  return (
    <>
      {tour.map((destination) => {
        const { id, cityName, placeName, image } = destination;
        return (
          <article key={id} className='destination'>
            <img src={image} alt={cityName} />
            <h4> {cityName}</h4>
            <p> </p>
            <p> {placeName}</p>
            <p> </p>
            <button type='button' onClick={() => removeDestination(id)}>
              remove destination
            </button>
          </article>
        );
      })}
    </>
  );
};

export default Trip;
