import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Book(props) {
  const scrollref = useRef(null);

  useEffect(() => {
    if (scrollref.current) {
      scrollref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday", // default selected option
  });

  // Handle input/select changes
  function handleInputChange(e) {
    const { name, value } = e.target;

    // Update form data state
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If date is changed, dispatch to update available times
    if (name === "date") {
      props.dispatch({ type: "UPDATE_TIMES", date: value });
    }
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Table booked for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests on the occasion of ${formData.occasion}`,
    );
    // Add your form submission logic here if needed
    props.setReservation(formData);
    navigate("/confirm");
  }

  return (
    <main
      ref={scrollref}
      className="book-page"
      style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}
        className="book-table-form"
      >
        <h1>Book a Table</h1>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          required
          style={{ width: "100%", padding: "0.5rem" }}
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="date">Date: </label>
        <input
          type="date"
          id="date"
          name="date"
          required
          style={{ width: "100%", padding: "0.5rem" }}
          value={formData.date}
          onChange={handleInputChange}
        />

        <label htmlFor="time">Time: </label>
        <select
          id="time"
          name="time"
          required
          style={{ width: "100%", padding: "0.5rem" }}
          value={formData.time}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select a time
          </option>
          {props.availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of Guests: </label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="20"
          required
          style={{ width: "100%", padding: "0.5rem" }}
          value={formData.guests}
          onChange={handleInputChange}
        />

        <label htmlFor="occasion">Occasion: </label>
        <select
          id="occasion"
          name="occasion"
          required
          style={{ width: "100%", padding: "0.5rem" }}
          value={formData.occasion}
          onChange={handleInputChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "0.75rem",
            backgroundColor: "#2E8B57",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Book Table
        </button>
      </form>
    </main>
  );
}

export default Book;
