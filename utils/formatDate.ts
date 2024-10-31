export function formatDate(dateString: string) {
  const date = new Date(dateString.replace(" ", "T"));
  return date.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
