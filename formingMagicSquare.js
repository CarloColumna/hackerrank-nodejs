function formingMagicSquare(s) {
    //var magic_constant = s.length * (Math.pow(s.length, 2) + 1) / 2;

    var costArr = [];
    var combi = [
            [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
            [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
            [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
            [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
            [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
            [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
            [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
            [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
            ];

    var cost = 0;
    combi.forEach(function(element) {

  		for (var i = 0; i < s.length; i++) {
    		for (var j = 0; j < s[i].length; j++) {
    		if (s[i][j] != element[i][j]) {
    			cost += Math.abs(s[i][j] - element[i][j]);
    		}
    	}
    }
    costArr.push(cost);
    cost = 0;
	});
    console.log(Math.min(...costArr)); 
}

formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]);
formingMagicSquare([ [ 4, 8, 2 ], [ 4, 5, 7 ], [ 6, 1, 6 ] ]);