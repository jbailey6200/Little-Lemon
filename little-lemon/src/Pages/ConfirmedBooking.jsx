import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function ConfirmedBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData;

  // If no booking data, redirect to reservations
  React.useEffect(() => {
    if (!bookingData) {
      navigate('/reservations');
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null;
  }

  // Format date to readable format
  const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Format guest count
  const formatGuests = (count) => {
    return count === 1 ? '1 person' : `${count} people`;
  };

  return (
    <main className="section confirmation-page" aria-labelledby="confirmation-title">
      <div className="container">
        <div className="confirmation-card">
          {/* Success Icon */}
          <div className="success-icon" aria-hidden="true">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="40" fill="#495E57"/>
              <path 
                d="M25 40L35 50L55 30" 
                stroke="white" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 id="confirmation-title" className="confirmation-heading">
            Booking Confirmed!
          </h1>

          {/* Success Message */}
          <p className="confirmation-message">
            Your table has been reserved successfully.
          </p>

          {/* Reservation Details */}
          <section className="reservation-details" aria-labelledby="details-heading">
            <h2 id="details-heading" className="details-heading">
              Reservation Details
            </h2>

            <dl className="details-list">
              <div className="detail-item">
                <dt>Date:</dt>
                <dd>{formatDate(bookingData.date)}</dd>
              </div>

              <div className="detail-item">
                <dt>Time:</dt>
                <dd>{bookingData.time}</dd>
              </div>

              <div className="detail-item">
                <dt>Guests:</dt>
                <dd>{formatGuests(bookingData.guests)}</dd>
              </div>

              <div className="detail-item">
                <dt>Occasion:</dt>
                <dd>{bookingData.occasion}</dd>
              </div>
            </dl>
          </section>

          {/* Confirmation Email Message */}
          <p className="email-message">
            A confirmation email has been sent to you. We look forward to seeing you!
          </p>

          {/* Return to Home Button */}
          <Link 
            to="/" 
            className="cta return-home-btn"
            aria-label="Return to home page"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}