import React from "react";

const bookingData = [
  { id: 1, date: "2025-01-15", time: "18:00", guests: 4, name: "John Smith", occasion: "Birthday" },
  { id: 2, date: "2025-01-16", time: "19:00", guests: 2, name: "Sarah Johnson", occasion: "Anniversary" },
  { id: 3, date: "2025-01-17", time: "17:30", guests: 6, name: "Mike Davis", occasion: "Business" },
  { id: 4, date: "2025-01-18", time: "18:30", guests: 3, name: "Emily Brown", occasion: "None" },
  { id: 5, date: "2025-01-19", time: "20:00", guests: 5, name: "David Wilson", occasion: "Birthday" },
];

export default function BookingsTable() {
  return (
    <section className="bookings-table-container" aria-labelledby="bookings-heading">
      <h2 id="bookings-heading" className="section-title" style={{ marginBottom: 20 }}>
        Current Bookings
      </h2>
      
      <div className="table-wrapper" role="region" aria-label="Table of current reservations" tabIndex="0">
        <table className="bookings-table" role="table" aria-describedby="bookings-heading">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Guests</th>
              <th scope="col">Name</th>
              <th scope="col">Occasion</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
                <td>{booking.name}</td>
                <td>{booking.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}