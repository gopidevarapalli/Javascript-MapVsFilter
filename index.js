// Map can iterate each element and can modify and return the result into a new array or existing array.

marks = [2,3,2,3,4,5,6,4,4,54,5,44,33,1];
results = marks.map(function(candidate){

	return candidate>=35?'Pass':'Fail';
});
console.log(results); // ["Fail", "Fail", "Fail", "Fail", "Fail", "Fail", "Fail", "Fail", "Fail", "Pass", "Fail", "Pass", "Fail", "Fail"]
console.log(marks); //  [2, 3, 2, 3, 4, 5, 6, 4, 4, 54, 5, 44, 33, 1]  it just returned who got greater than or equal to 35 marks.


// Filter can only iterate and filters the elements based on the condition but it cannot edit/modify the element.

marks = [2,3,2,3,4,5,6,4,4,54,5,44,33,1];
results = marks.filter(function(candidateMarks){

	return candidateMarks>=35;
});
console.log(results); //[54, 44]
console.log(marks);  ///[2, 3, 2, 3, 4, 5, 6, 4, 4, 54, 5, 44, 33, 1]