function birthdayCakeCandles(n, ar) {
	var desc = ar.sort(function(a, b) {
		return b - a;
	});

	var count = 0, index = 0;

	while (index != -1) {
		index = ar.indexOf(ar[0], index + 1);
		count++;
	}
	return count;

}

let result = birthdayCakeCandles(4, [3, 2, 1, 3]);

console.log(result + "\n");