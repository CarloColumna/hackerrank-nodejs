function timeConversion(s) {
	var time = s.match(/(\d+):(\d+):(\d+)(\w+)/);
	var hrs = Number(time[1]);
	var meridian = time[4]. toUpperCase();

	if (meridian == 'AM' && hrs == 12)
		hrs -= 12
	else if (meridian == 'PM' && hrs < 12)
		hrs += 12;

	if (hrs < 10)
		hrs = '0' + hrs;

	console.log(hrs + ':' + time[2] + ':' + time[3]);

}

timeConversion('07:05:45PM');
timeConversion('07:05:45AM');
timeConversion('12:00:00AM');
timeConversion('12:00:00PM');
