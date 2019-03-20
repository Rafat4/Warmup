// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		var string ="";
		for (var i =0; i <n ; i ++){
			string =string+s;
		} return string ;
		//your code is here
	}