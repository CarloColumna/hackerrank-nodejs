function kangaroo(x1, v1, x2, v2) {
	var faster;

	if (v1 > v2) {
		faster = v1;
		farther = x1;
		slower = v2;
		closer = x2;
	}
	else {
		faster = v2;
		farther = x2;
		slower = v1;
		closer = x1;
	}



	var flag = false;
	while (farther < closer) {
		farther += faster;
		closer += slower;
		if (farther == closer) {
			flag = true;
			break;
		}
	}

	if (flag)
		console.log('YES');
	else
		console.log('NO');


}

kangaroo(0, 3, 4, 2);	//YES
kangaroo(0, 2, 5, 3)	//NO