import React, { useEffect, useMemo, useRef, useState } from "react";
import { initializeTimes, updateTimes, submitBooking } from "../utils/bookingAPI";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ReservationForm({ onSuccess }) {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("None");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requests, setRequests] = useState("");
  const [times, setTimes] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [serverMsg, setServerMsg] = useState("");
  
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    name: false,
    email: false,
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const availableTimes = initializeTimes();
    setTimes(availableTimes);
  }, []);

  useEffect(() => {
    const availableTimes = updateTimes(date);
    setTimes(availableTimes);
    setTime("");
  }, [date]);

  const validation = useMemo(() => {
    return {
      date: !!date,
      time: !!time,
      guests: Number(guests) >= 1 && Number(guests) <= 10,
      name: name.trim().length >= 2,
      email: emailRe.test(email),
    };
  }, [date, time, guests, name, email]);

  const isValid = Object.values(validation).every(Boolean);

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    setTouched({
      date: true,
      time: true,
      guests: true,
      name: true,
      email: true,
    });

    setServerMsg("");

    if (!isValid) {
      if (!validation.name && nameRef.current) nameRef.current.focus();
      else if (!validation.email && emailRef.current) emailRef.current.focus();
      return;
    }

    setSubmitting(true);
    const payload = { date, time, guests: Number(guests), occasion, name, email, requests };
    const res = await submitBooking(payload);
    setSubmitting(false);

    setServerMsg(res.message);
    if (res.ok) {
      onSuccess?.(payload);
      setTime("");
      setGuests(2);
      setOccasion("None");
      setName("");
      setEmail("");
      setRequests("");
      setTouched({
        date: false,
        time: false,
        guests: false,
        name: false,
        email: false,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-labelledby="reserve-title" noValidate>
      <h1 id="reserve-title" className="section-title" style={{ marginBottom: 12 }}>
        Reserve a Table
      </h1>
      <p className="lede" style={{ marginBottom: 18 }}>
        Choose a date and time, then tell us a bit about your party.
      </p>

      <fieldset className="grid-12" style={{ rowGap: 16, border: 'none', padding: 0, margin: 0 }}>
        <legend className="visually-hidden">Reservation Details</legend>

        <div style={{ gridColumn: "span 6" }}>
          <label htmlFor="res-date">Date *</label>
          <input
            id="res-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onBlur={() => handleBlur('date')}
            required
            min={new Date().toISOString().slice(0, 10)}
            aria-label="Choose reservation date"
            aria-invalid={touched.date && !validation.date ? "true" : "false"}
            aria-describedby={touched.date && !validation.date ? "date-error" : undefined}
            aria-required="true"
          />
          {touched.date && !validation.date && (
            <span id="date-error" className="error-message" role="alert">Please select a date</span>
          )}
        </div>

        <div style={{ gridColumn: "span 6" }}>
          <label htmlFor="res-time">Time *</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            onBlur={() => handleBlur('time')}
            required
            aria-label="Choose reservation time"
            aria-invalid={touched.time && !validation.time ? "true" : "false"}
            aria-describedby={touched.time && !validation.time ? "time-error" : undefined}
            aria-required="true"
          >
            <option value="">Select a time</option>
            {times.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {touched.time && !validation.time && (
            <span id="time-error" className="error-message" role="alert">Please select a time</span>
          )}
        </div>

        <div style={{ gridColumn: "span 4" }}>
          <label htmlFor="guests">Number of guests *</label>
          <input
            id="guests"
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            onBlur={() => handleBlur('guests')}
            required
            aria-label="Number of guests"
            aria-invalid={touched.guests && !validation.guests ? "true" : "false"}
            aria-describedby={touched.guests && !validation.guests ? "guests-error" : "guests-hint"}
            aria-required="true"
          />
          <span id="guests-hint" className="visually-hidden">Enter a number between 1 and 10</span>
          {touched.guests && !validation.guests && (
            <span id="guests-error" className="error-message" role="alert">Must be between 1 and 10</span>
          )}
        </div>

        <div style={{ gridColumn: "span 8" }}>
          <label htmlFor="occasion">Occasion</label>
          <select 
            id="occasion" 
            value={occasion} 
            onChange={(e) => setOccasion(e.target.value)}
            aria-label="Select occasion type"
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Business</option>
          </select>
        </div>

        <div style={{ gridColumn: "span 6" }}>
          <label htmlFor="name">Full name *</label>
          <input
            id="name"
            ref={nameRef}
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur('name')}
            required
            minLength="2"
            aria-label="Your full name"
            aria-invalid={touched.name && !validation.name ? "true" : "false"}
            aria-describedby={touched.name && !validation.name ? "name-error" : undefined}
            aria-required="true"
          />
          {touched.name && !validation.name && (
            <span id="name-error" className="error-message" role="alert">Name must be at least 2 characters</span>
          )}
        </div>

        <div style={{ gridColumn: "span 6" }}>
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            ref={emailRef}
            type="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
            required
            aria-label="Your email address"
            aria-invalid={touched.email && !validation.email ? "true" : "false"}
            aria-describedby={touched.email && !validation.email ? "email-error" : undefined}
            aria-required="true"
          />
          {touched.email && !validation.email && (
            <span id="email-error" className="error-message" role="alert">Please enter a valid email</span>
          )}
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="requests">Special requests (optional)</label>
          <textarea
            id="requests"
            rows="4"
            placeholder="Allergies, high chair, quiet table…"
            value={requests}
            onChange={(e) => setRequests(e.target.value)}
            aria-label="Special requests for your reservation"
          />
        </div>
      </fieldset>

      <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
        <button
          type="submit"
          className="cta"
          disabled={!isValid || submitting}
          aria-disabled={!isValid || submitting}
          aria-label="On Click"
        >
          {submitting ? "Submitting..." : "Confirm Reservation"}
        </button>
        {serverMsg && (
          <span role="status" aria-live="polite" style={{ alignSelf: "center" }}>
            {serverMsg}
          </span>
        )}
      </div>
    </form>
  );
}