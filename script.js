function firstNonRepeatedChar(str) {
 let count = {};

	for ( let t of str) {
		count = (count[t] || 0 ) + 1
	}
	for (let t of str){
		if (count[t] === 1) {
			return count;
		}
	}
	
	return null;
	
}
// const input = prompt("Enter a string");
// // alert(firstNonRepeatedChar(input)); 