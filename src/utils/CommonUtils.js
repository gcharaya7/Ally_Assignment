/**
 * Function to change date in string format to date object
 * @param  dateString date in string format
 * @returns date object
 */
export const stringToDate = function (dateString) {
  const [dd, mm, yyyy] = dateString.split("/");
  return new Date(`${yyyy}-${mm}-${dd}`);
};

/**
 * Function to check if two dates are same
 * @param  d1 date 1
 * @param  d2 date 2
 * @returns true if passed two dates are same otherwise false
 */
export const isSameDate = (d1, d2) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

/**
 * Function to check passed datestring is equals to current date
 * @param  dateString datestring
 * @returns true if passed datestring is equal to current date otherwise false
 */
export const isDateToday = (dateString) => {
  const inputDate = stringToDate(dateString);
  const currentDate = new Date();
  return isSameDate(currentDate, inputDate);
};

/**
 * Function to check if current lies between passed start time and end time
 * @param  startTime interval start time
 * @param  endTime interval end time
 * @returns true if current time lies between passed interval otherwise false
 */
export const isTimingCurrent = (startTime, endTime) => {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const [startTimeHour, startTimeMinutes] = startTime.split(":");
  const [endTimeHour, endTimeMinutes] = endTime.split(":");
  return (
    currentHours >= parseInt(startTimeHour, 10) &&
    currentHours <= parseInt(endTimeHour, 10) &&
    currentMinutes >= parseInt(startTimeMinutes, 10) &&
    currentMinutes <= parseInt(endTimeMinutes, 10)
  );
};

export const isTimeInBetween = (time, startTime, endTime) => {
  const [timeToCheckHour, timeToCheckMinutes] = time.split(":");
  const [startTimeHour, startTimeMinutes] = startTime.split(":");
  const [endTimeHour, endTimeMinutes] = endTime.split(":");
  return (
    timeToCheckHour >= parseInt(startTimeHour, 10) &&
    timeToCheckHour <= parseInt(endTimeHour, 10) &&
    timeToCheckMinutes >= parseInt(startTimeMinutes, 10) &&
    timeToCheckMinutes <= parseInt(endTimeMinutes, 10)
  );
};

/**
 * Function to get datestring in dd/mm/yyyy format
 * @param  dateString dateString
 * @returns date string in dd/mm/yyyy format
 */
export const formatDateDDMMYYY = (dateString) => {
  var d = new Date(dateString),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};

/**
 * Function to get datestring in yyyy-mm-dd format
 * @param  dateString dateString
 * @returns date string in yyyy-mm-dd format
 */
export const formatDateYYYYMMDD = (dateString) => {
  var d = new Date(dateString),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};
