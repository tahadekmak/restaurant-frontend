import moment from 'moment'

export const getDateForPost = () => {
    const today = new Date();
    const offset = -1 * today.getTimezoneOffset();
    const offsetString = offset.toString();

    let sign = "+";
    if (offsetString.includes("-")) {
        sign = "-";
    }
    const min = Math.abs(offset);

    let h = Math.floor(min / 60);
    let m = min % 60;

    let hours = h.toString();
    let minutes = m.toString();

    if (-10 < h < 10) {
        hours = "0" + hours;
    }

    if (m < 10) {
        minutes = "0" + minutes.charAt(0);
    }

    const finalOffset = sign + hours + ":" + minutes;

    return today.getDate() + '/' +
        (today.getMonth() + 1) + '/' +
        today.getFullYear() + 'T' +
        today.getHours() + ':' +
        today.getMinutes() + ':' +
        today.getSeconds() + ':' +
        today.getMilliseconds() +
        finalOffset;
}

export const getDateForGet = (dateString) => {

    const today = new Date();
    const thisYear = today.getFullYear();
    let leapYear;
    leapYear = thisYear % 4 === 0 && true;
    let daysOfMonth = [
        {month: 1, days: 31},
        {month: 2, days: leapYear ? 29 : 28},
        {month: 3, days: 31},
        {month: 4, days: 30},
        {month: 5, days: 31},
        {month: 6, days: 30},
        {month: 7, days: 31},
        {month: 8, days: 31},
        {month: 9, days: 30},
        {month: 10, days: 31},
        {month: 11, days: 30},
        {month: 12, days: 31},
    ];

    const fullDate = dateString.split("T");
    const date = fullDate[0];
    const timeWithZoneString = fullDate[1];

    const dateData = date.split("-");
    const day = parseInt(dateData[0]);
    const month = parseInt(dateData[1]);
    const year = parseInt(dateData[2]);

    let splitSign = "+";
    const positiveSign = timeWithZoneString.includes(splitSign);
    if (!positiveSign) {
        splitSign = "-";
    }

    const timeWithOffset = timeWithZoneString.split(splitSign);
    const fullTime = timeWithOffset[0];

    const time = fullTime.split(":");
    const hours = parseInt(time[0]);
    const minutes = parseInt(time[1]);

    const myTimeOffset = new Date().getTimezoneOffset().toString();

    let myMinutes = (hours * 60 + minutes) - myTimeOffset;

    let finalDay = day;
    let finalMonth = month;
    let finalYear = year;
    let finalHours;
    let finalMinutes;

    if (myMinutes > 24 * 60) {
        if (day < daysOfMonth[month - 1].days) {
            finalDay = finalDay + 1;
        }
        if (day === daysOfMonth[month - 1].days) {
            if (finalMonth === 12) {
                finalYear = finalYear + 1;
                finalMonth = 1;
                finalDay = 1;
            } else {
                finalDay = 1;
                finalMonth = finalMonth + 1;
            }
        }
        myMinutes = myMinutes - 24 * 60;
    }
    if (myMinutes < 0) {
        if (day > 1) {
            finalDay = finalDay - 1;
        }
        if (day === 1) {
            if (finalMonth === 1) {
                finalYear = finalYear - 1;
                finalMonth = 12;
                finalDay = 31;
            } else {
                finalDay = daysOfMonth[month - 2].days;
                finalMonth = finalMonth - 1;
            }
        }
        myMinutes = myMinutes + 24 * 60;
    }

    finalHours = Math.floor(myMinutes / 60);
    finalMinutes = myMinutes % 60;
    const finalTime = finalHours + ":" + finalMinutes;


    return finalYear + "/" + finalMonth + "/" + finalDay + " ---- " + moment(finalTime, 'hh:mm').format('hh:mm A');
}