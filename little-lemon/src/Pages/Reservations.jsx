import React from "react";
import { useNavigate } from "react-router-dom";
import ReservationForm from "../components/ReservationForm.jsx";

export default function Reservations() {
  const navigate = useNavigate();

  function handleSuccess(payload) {
    console.log("Booking confirmed:", payload);
    // Navigate to confirmation page with booking data
    navigate('/confirmed', { state: { bookingData: payload } });
  }

  return (
    <main className="section" aria-labelledby="reserve-title">
      <div className="container">
        <section className="grid-12" style={{ rowGap: 24 }}>
          <div style={{ gridColumn: "span 7" }}>
            <ReservationForm onSuccess={handleSuccess} />
          </div>
          <aside style={{ gridColumn: "span 5" }} aria-label="Reservation help">
            <div className="ph-box" style={{ height: 180, marginBottom: 16 }} />
            <p>
              <strong>Need help?</strong> Call us at (312) 555-0137 or email{" "}
              <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>.
            </p>
            <p style={{ marginTop: 8, fontSize: "var(--small)", color: "#555" }}>
              We hold tables for 15 minutes past the booked time. For parties larger than 10,
              please contact us directly.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}