import { addLeadingZero } from "./addLeadingZero";

export const formatDate = (date: Date) => {
  var day = addLeadingZero(date.getDate());
  var month = addLeadingZero(date.getMonth() + 1);
  var year = date.getFullYear();

  return day + ":" + month + ":" + year;
};
