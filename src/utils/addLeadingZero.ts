export const addLeadingZero = (value: number) => {
  return value < 10 ? "0" + value : value;
};
