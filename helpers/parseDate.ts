const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('/').map(Number);
  const fullYear = year < 50 ? 2000 + year : 1900 + year; // Adjust century dynamically
  return new Date(fullYear, month - 1, day);
};

export default parseDate;
