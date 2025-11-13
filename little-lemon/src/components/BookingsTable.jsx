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
    <div className="bookings-table-container">
      <h2 className="section-title" style={{ marginBottom: 20 }}>Current Bookings</h2>
      
      <div className="table-wrapper">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Name</th>
              <th>Occasion</th>
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
    </div>
  );
}