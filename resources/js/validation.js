function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    if (name == null || name == "") {
       alert("Numele este null");
       return false;
    }

    if (/^[a-zA-Z]+$/.test(name)){ ok=1;}
    else{
    	alert("Format incorect pentru nume");
    	return false;
    }
   var email = document.forms["myForm"]["name"].value;
    if (email == null || email == "") {
       alert("Numele este null");
       return false;
    }

    if (/^[a-zA-Z]+$/.test(email)){ ok=1;}
    else{
    	alert("Format incorect pentru email");
    	return false;
    }
    	
   var phone = document.forms["myForm"]["name"].value;
    if (phone == null || phone == "") {
       alert("Numele este null");
       return false;
    }

    if (/^[0-9]+$/.test(phone)){ ok=1;}
    else{
    	alert("Format incorect pentru numar de telefon");
    	return false;
    }
    	
}
    
