const formatDateApi = (dateString: string): string => {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return formatter.format(date).replace(/\//g, '-');
};

export default formatDateApi;