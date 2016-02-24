function passWord() {
	var testV = 1;
	var pass1 = prompt('Please Enter Your Password', '');
	while (testV < 3) {
		if (!pass1) 
			history.go(-1);
		else if (pass1.toLowerCase() == "letmein") {
			display();
			break;
		} else {
			testV+=1;
			var pass1 = ""
			prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
		}
	}
	if (pass1.toLowerCase()!="password" & testV ==3) 
		history.go(-1);
	return " ";
} 

function display() {
	document.getElementById('origin').style.cssText = 'display: initial';
	document.getElementById('lock').style.cssText = 'display: none';
}