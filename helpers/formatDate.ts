const formatDate = (date?: Date) => {
  if (!date) return;
  const [month, day, year] = date.toLocaleDateString('en-US').split('/');
  return `${day}/${month}/${year.slice(-2)}`;
};

export default formatDate;
