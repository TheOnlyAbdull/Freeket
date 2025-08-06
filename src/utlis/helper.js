export function generateTicketNumber(eventName, length = 4) {

  let prefix = '';
  if (eventName && eventName.length >= 3) {
    prefix = eventName.substring(0, 3).toUpperCase();
  } else if (eventName) {
    // If name is 1 or 2 chars, pad it with 'X'
    prefix = eventName.toUpperCase().padEnd(3, 'X');
  } else {
    // Default fallback if eventName is empty or null
    prefix = 'EVT';
  }

  // --- Part 2: Generate Random Digits ---
  let suffix = '';
  for (let i = 0; i < length; i++) {
    suffix += Math.floor(Math.random() * 10).toString(); // Generates a digit from 0-9
  }

  // --- Part 3: Combine and Return ---
  return prefix + '-' + suffix;
}