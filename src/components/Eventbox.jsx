import React, { useState } from 'react';

function EventBox({ event }) {
  const [showDescription, setShowDescription] = useState(false);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [fullName, setFullName] = useState('');
  const [isReserved, setIsReserved] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleReservationForm = () => {
    setShowReservationForm(!showReservationForm);
  };

  const reserveEvent = () => {
    if (!isReserved) {
      if (showReservationForm) {
        if (fullName.trim() === '') {
          alert('Please enter your full name before confirming your reservation.');
        } else {
          const confirmation = window.confirm(
            `Do you want to confirm your reservation for ${event.title} by ${fullName}?`
          );
          if (confirmation) {
            // Here, you can add client-side logic for handling reservations
            // For demonstration purposes, let's update the state
            setIsReserved(true);
            setShowDescription(false);
            setShowReservationForm(false);
          }
        }
      } else {
        toggleReservationForm();
      }
    }
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  return (
    <div className="event-box" onClick={toggleDescription}>
      <img src={event.image} alt={event.title} />
      <div className="event-details">
        <h2>{event.title}</h2>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Venue: {event.venue}</p>
        {showDescription && <p>Description: {event.description}</p>}
        {showReservationForm && (
          <input
            type="text"
            className="input-fullname"
            placeholder="Enter your full name"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        )}
        {showReservationForm && (
          <button className="reserve-button" onClick={reserveEvent}>
            Reserve
          </button>
        )}
        {!isReserved && !showReservationForm && (
          <button className="reserve-button" onClick={reserveEvent}>
            Reserve
          </button>
        )}
        {isReserved && (
          <p>Reservation confirmed! Thank you, {fullName}.</p>
        )}
      </div>
    </div>
  );
}

export default EventBox;
