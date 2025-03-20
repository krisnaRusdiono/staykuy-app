const formatDateShort = (date?: Date): string| null => {
  if (!date) return null;

  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export default formatDateShort;