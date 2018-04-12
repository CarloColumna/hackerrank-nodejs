function encryption(s) {
    console.log(s);
    var charArr = s.split('').filter(function(val) {
    	return val != ' ';
    });
    //console.log(charArr);
    var row = Math.round(Math.sqrt(charArr.length), 0);
    console.log('row: ' + row);

    var col = row;
    var total = row * col;
    while (total < charArr.length)
     {
    	col++;
    	total = row * col;
    }
    console.log('col: ' + col);

    var origGrid = [];
    var item = [];
    for (var i = 0; i < charArr.length; i++) {
    	item.push(charArr[i]);
    	if ( item.length == col ) {
    		origGrid.push(item);
    		item = [];
    	}
    }
    if (item.length != 0)
    	origGrid.push(item);
    console.log(origGrid);

    var newArr = [];
    item = [];
    var counter = 0;
    for (var j = 0; j < col; j++) {
	   	for (var i = 0; i < origGrid.length; i++) {
	   		//if (typeof origGrid[i][counter] !== 'undefined' && origGrid[i][counter] !== null);
	    	item.push(origGrid[i][counter]);

	    	if (item.length == row) {
	    		newArr.push(item);
	    		item = [];
	    		counter++;
	    	}
	    }

    }

    //console.log(newArr);
    var str = '';
    newArr.forEach(function(element) {
    	str += element.join('') + ' ';
    });
    console.log(str);

//     var flattened = newArr.reduce(function(accumulator, currentValue) {
//     	return accumulator.concat(currentValue);
//     }, []);
//     console.log(flattened.join(''));
}
encryption('if man was meant to stay on the ground god would have given us roots');
encryption('have a nice day');
encryption('feed the dog');
encryption('chillout');
