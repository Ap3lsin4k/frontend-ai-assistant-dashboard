export default function DateTimeDisplay({ date }: { date: string }) {
  const formattedTime = new Date(date);

  const formattedDate = formattedTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedHours = formattedTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <span className="cell-date">
      {formattedDate}
      {"   "}
      {formattedHours}
    </span>
  );
}
