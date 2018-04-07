function miniMaxSum(arr) {
	var asc = arr.sort(function(a,b) {
		return a - b;
	});

	var minSum = 0, maxSum = 0;
	
	for (var i = 0; i < arr.length - 1; i++) {

		minSum += asc[i];
		maxSum += asc[arr.length -1 - i];
	}

	console.log(minSum + " " + maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);