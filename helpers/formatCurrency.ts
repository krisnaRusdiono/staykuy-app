const formatCurrency = (value: number | string, delimiter = '.') =>
  Number(value).toLocaleString('en-US').replace(/,/g, delimiter);

export default formatCurrency;
