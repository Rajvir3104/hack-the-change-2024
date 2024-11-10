import React, { useEffect, useState } from 'react';
import EventCard from '../../components/eventcard'; // Assuming you have a component for displaying events
import './style.css';

const EventPosting = () => {
  const [eventData, setEventData] = useState([]);
  const [value, setValue] = useState('');

  // Fetch events based on location (similar to JobPosting component)
  useEffect(() => {
    fetch(`http://localhost:5000/Events/get_item_by_location?location=${value === '' ? 'AB' : value}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setEventData([]);  // If no event is found, reset the event data
        } else {
          setEventData(data);  // If data is found, set it to state
        }
      });
  }, [value]);

  // Handle input change for location
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="event-posting-container">
      <h1>Find Events in Your Area</h1>

      <input type="text" value={value} onChange={handleChange} placeholder="Enter location" />

      {/* Render Event Cards */}
      {eventData.map((event, index) => (
        <EventCard
          key={index}
          Name={event.Name}
          Location={event.Location}
          Description={event.Description}
          Phone={event.Phone}
          Email={event.Email}
          Website={event.Website}
        />
      ))}
    </div>
  );
};

export default EventPosting;
