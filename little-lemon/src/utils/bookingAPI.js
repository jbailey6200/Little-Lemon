// Simple mock API for availability & submission

export function fetchAvailableTimes(dateStr) {
  // pretend server logic: more slots on weekdays
  const date = new Date(dateStr + "T00:00:00");
  const day = date.getDay(); // 0 Sun .. 6 Sat
  const base = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];
  const wknd = ["20:00", "20:30", "21:00"];
  return day === 0 || day === 6 ? base.concat(wknd) : base;
}

export async function submitBooking(payload) {
  // simulate latency & success
  await new Promise((r) => setTimeout(r, 300));
  // pretend we validate server-side
  if (!payload.date || !payload.time || !payload.guests || !payload.name || !payload.email) {
    return { ok: false, message: "Missing fields" };
  }
  return { ok: true, message: "Reservation confirmed!" };
}
