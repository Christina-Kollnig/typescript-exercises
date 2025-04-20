/*
Exercise 4: Enums & Utility Types

Task:
1. Define an enum for a real-world scenario (e.g., user roles, order status).
2. Use a utility type (e.g., Partial, Record) in a practical function.
3. Use an AI tool to suggest alternative enum or utility type usages. Try different approaches and discuss their pros and cons.
*/

enum Status {
  Pending,
  Shipped,
  Delivered,
}

function getStatusText(status: Status): string {
  if (status === Status.Pending) return "Waiting";
  if (status === Status.Shipped) return "On the way";
  if (status === Status.Delivered) return "Arrived";
  return "Unknown";
}

// Try using a utility type like Partial or Record in a function or object.
// Use AI to help you explore different enum and utility type usages.
// Occasionally, try omitting or changing types to see what happens.
