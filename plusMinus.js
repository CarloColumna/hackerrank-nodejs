function plusMinus(arr) {

    var pos = 0, neg = 0, zer = 0;

    for (var i = 0; i < arr.length; i++) {
    	if (arr[i] == 0)
    		zer++;
    	else if (arr[i] > 0)
    		pos++;
    	else
    		neg++;
    }

    console.log(pos/arr.length);
    console.log(neg/arr.length);
    console.log(zer/arr.length);
}

var arr = [-4, 3, -9, 0, 4, 1]

plusMinus(arr);