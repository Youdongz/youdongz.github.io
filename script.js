function passWord() {
	var testV = 1;
	var pass1 = prompt('Please Enter Your Password', '');
	while (testV < 3) {
		if (!pass1) 
			history.go(-1);
		else if (pass1.toLowerCase() == "letmein") {
			display();
		break;
		} else if (pass1.toLowerCase() == "admin") {
			admin();
			break;
		} else {
			testV+=1;
			var pass1 = ""
			prompt('Access Denied - Password Incorrect, Please Try Again.', '');
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

function admin() {
	document.getElementById('origin').style.cssText = 'display: initial';
	document.getElementById('lock').style.cssText = 'display: none';
	document.getElementById('onoffswitch').style.cssText = 'display: initial';
}

function switch_it() {
	var x = document.getElementById("myonoffswitch").checked;
	if (x == false) {
		document.getElementById('green').style.cssText = 'display: none';
		document.getElementById('red').style.cssText = 'display: initial';
	} else {
		document.getElementById('green').style.cssText = 'display: initial';
		document.getElementById('red').style.cssText = 'display: none';
	}
}