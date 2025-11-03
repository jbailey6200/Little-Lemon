import React, { useEffect, useMemo, useRef, useState } from "react";
import { fetchAvailableTimes, submitBooking } from "../utils/bookingAPI";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ReservationForm({ onSuccess }) {
  // controlled inputs
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("None");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requests, setRequests] = useState("");

  // derived/stateful data
  const [times, setTimes] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  // uncontrolled example (demonstration): focus the first invalid field
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    setTimes(fetchAvailableTimes(date));
    setTime(""); // reset time when date changes
  }, [date]);

  const isValid = useMemo(() => {
    if (!date) return false;
    if (!time) return false;
    const n = Number(guests);
    if (!(n >= 1 && n <= 10)) return false;
    if (name.trim().length < 2) return false;
    if (!emailRe.test(email)) return false;
    return true;
  }, [date, time, guests, name, email]);

  async function handleSubmit(e) {
    e.preventDefault();
    setServerMsg("");

    if (!isValid) {
      if (!name.trim() && nameRef.current) nameRef.current.focus();
      else if (!emailRe.test(email) && emailRef.current) emailRef.current.focus();
      return;
    }

    setSubmitting(true);
    const payload = { date, time, guests: Number(guests), occasion, name, email, requests };
    const res = await submitBooking(payload);
    setSubmitting(false);

    setServerMsg(res.message);
    if (res.ok) {
      onSuccess?.(payload);
      // clear form
      setTime("");
      setGuests(2);
      setOccasion("None");
      setName("");
      setEmail("");
      setRequests("");
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

      <div className="grid-12" style={{ rowGap: 16 }}>
        <div style={{ gridColumn: "span 6" }}>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            aria-invalid={!date ? "true" : "false"}
          />
        </div>

        <div style={{ gridColumn: "span 6" }}>
          <label htmlFor="time">Time</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-invalid={!time ? "true" : "false"}
          >
            <option value="">Select a time</option>
            {times.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div style={{ gridColumn: "span 4" }}>
          <label htmlFor="guests">Guests (1–10)</label>
          <input
            id="guests"
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
            aria-invalid={!(Number(guests) >= 1 && Number(guests) <= 10)}
          />
        </div>

        <div style={{ gridColumn: "span 8" }}>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Business</option>
          </select>
        </div>

        <div style={{ gridColumn: "span 6" }}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            ref={nameRef}
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-invalid={name.trim().length < 2}
          />
        </div>

        <div style={{ gridColumn: "span 6" }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            ref={emailRef}
            type="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={!emailRe.test(email)}
          />
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="requests">Special requests (optional)</label>
          <textarea
            id="requests"
            rows="4"
            placeholder="Allergies, high chair, quiet table…"
            value={requests}
            onChange={(e) => setRequests(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
        <button
          type="submit"
          className="cta"
          disabled={!isValid || submitting}
          aria-disabled={!isValid || submitting}
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
