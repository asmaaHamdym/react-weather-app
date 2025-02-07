export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const dayNameLong = date.toLocaleString("en-US", { weekday: "long" });
  const dayNameShort = date.toLocaleString("en-US", { weekday: "short" });
  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return { dayNameLong: dayNameLong, dayNameShort: dayNameShort, time: time };
};
