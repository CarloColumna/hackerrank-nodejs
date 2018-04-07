function gradingStudents(grades) {
	var newArr = [];
	for (var i = 0; i < grades.length; i++) {
		if (grades[i] < 38)
			newArr.push(grades[i]);
		else {
			var fiveMul = parseInt(grades[i] / 5) * 5 + 5;

			if ((fiveMul - grades[i]) < 3)
				newArr.push(fiveMul);
			else
				newArr.push(grades[i]);
		}
	}
	return newArr;
}

let result = gradingStudents([73, 67, 38, 33]);

console.log(result.join("\n") + "\n");