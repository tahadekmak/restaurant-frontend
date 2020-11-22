import moment from 'moment'

export const getDateForPost = () => {
    const today = new Date();

    return today.getDate() + '-' +
        (today.getMonth() + 1) + '-' +
        today.getFullYear() + ' ' +
        today.getHours() + ':' +
        today.getMinutes() + ':' +
        today.getSeconds();
}

export const getDateForGet = (dateString) => {

    const fullDate = dateString.split("T");
    const date = fullDate[0];
    const time = fullDate[1];

    const dateData = date.split("-");
    const day = parseInt(dateData[0]);
    const month = parseInt(dateData[1]);
    const year = parseInt(dateData[2]);

    const timeData = time.split(":");
    const hours = parseInt(timeData[0]);
    const minutes = parseInt(timeData[1]);

    const finalTime = hours + ":" + minutes;

    return year + "/" + month + "/" + day + " ---- " + moment(finalTime, 'hh:mm').format('hh:mm A');
}