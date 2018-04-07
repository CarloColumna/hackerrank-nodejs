function staircase(n) {
    for (var i = 0; i < n; i++) {
    	var str = ' '.repeat(n-i-1) + '#'.repeat(i+1);
    	console.log(str)
    }

}

staircase(5);