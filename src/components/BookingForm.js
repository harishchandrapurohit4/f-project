import { useState } from "react";

function BookingForm({ submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        id="date"
        type="date"
        value={formData.date}
        onChange={(e) =>
          setFormData({ ...formData, date: e.target.value })
        }
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={formData.time}
        onChange={(e) =>
          setFormData({ ...formData, time: e.target.value })
        }
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={formData.guests}
        onChange={(e) =>
          setFormData({ ...formData, guests: e.target.value })
        }
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={(e) =>
          setFormData({ ...formData, occasion: e.target.value })
        }
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Make Your reservation</button>
    </form>
  );
}

export default BookingForm;
