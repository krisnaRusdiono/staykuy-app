const countDayDiff = (date1: string, date2: string): number =>  {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const timeDiff = Math.abs(d2.getTime() - d1.getTime());
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

export default countDayDiff;