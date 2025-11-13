// API functions for booking system
// These functions interface with the global fetchAPI and submitAPI
// provided by the external API script

/**
 * Fetch available booking times for a specific date
 * @param {string} dateStr - Date in YYYY-MM-DD format
 * @returns {string[]} Array of available time slots
 */
export function fetchAvailableTimes(dateStr) {
  // Check if the global API is available
  if (typeof window.fetchAPI === 'function') {
    // Convert dateStr to Date object for the API
    const date = new Date(dateStr + "T00:00:00");
    return window.fetchAPI(date);
  }
  
  // Fallback to mock data if API not loaded
  console.warn('fetchAPI not available, using fallback data');
  const date = new Date(dateStr + "T00:00:00");
  const day = date.getDay();
  const base = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];
  const wknd = ["20:00", "20:30", "21:00"];
  return day === 0 || day === 6 ? base.concat(wknd) : base;
}

/**
 * Submit a booking reservation
 * @param {Object} payload - Booking form data
 * @returns {Promise<{ok: boolean, message: string}>}
 */
export async function submitBooking(payload) {
  // Simulate latency for better UX feedback
  await new Promise((r) => setTimeout(r, 300));
  
  // Check if the global API is available
  if (typeof window.submitAPI === 'function') {
    const success = window.submitAPI(payload);
    if (success) {
      return { ok: true, message: "Reservation confirmed!" };
    } else {
      return { ok: false, message: "Booking failed. Please try again." };
    }
  }
  
  // Fallback validation if API not loaded
  console.warn('submitAPI not available, using fallback validation');
  if (!payload.date || !payload.time || !payload.guests || !payload.name || !payload.email) {
    return { ok: false, message: "Missing required fields" };
  }
  return { ok: true, message: "Reservation confirmed! (Mock mode)" };
}

/**
 * Initialize times for today's date
 * This function is called when the component first mounts
 * @returns {string[]} Array of available times for today
 */
export function initializeTimes() {
  const today = new Date().toISOString().slice(0, 10);
  return fetchAvailableTimes(today);
}

/**
 * Update times based on a selected date
 * This function is called when the user changes the date
 * @param {string} selectedDate - Date in YYYY-MM-DD format
 * @returns {string[]} Array of available times for the selected date
 */
export function updateTimes(selectedDate) {
  return fetchAvailableTimes(selectedDate);
}
