var dateStamp = $("#date");
var toDay = moment().format('L');
dateStamp.prepend(toDay);