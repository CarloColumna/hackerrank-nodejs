function diagonalDifference(a) {
    var length = a.length;
    console.log(length);

    var left = 0, right = 0;
    //var right = 0;

    for (var i = 0; i < a.length; i++) {

        left += a[i][i];
        right += a[i][a.length-i-1];
    }

    return Math.abs(left - right);
}

 let result = diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]);
 console.log(result + "\n");

 var two = diagonalDifference([ [ 11, 2, 4, 5 ], [ 4, 5, 6, 3 ], [ 10, 8, -12, 2 ], [ 1, 3, -12, 6 ] ]);
 console.log(two + "\n");