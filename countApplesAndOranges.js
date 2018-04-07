function countApplesAndOranges(s, t, a, b, apples, oranges) {
	var larry = 0, rob = 0;

	for (var i = 0; i < apples.length; i++) {
		var distApp = a + apples[i];
		if (distApp >= s && distApp <= t )
			larry++;
	}

	for (var j = 0; j < oranges.length; j++) {
		var distOr = b + oranges[j];
		if (distOr >= s && distOr <= t)
			rob++;
	}
	console.log(larry);
	console.log(rob);
}

countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5, -6]);