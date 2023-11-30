



function registration() {


    var userName = prompt("Enter your name:");


    if (!isNaN (userName) || userName == null) {
        alert("Error: Please input correct fields.");

    }
    else {
        console.log( "your name is " + " " +(userName) );
    }

    var phoneNumber = prompt("Enter your phone number:");

    if (isNaN(phoneNumber) ||  phoneNumber == null || phoneNumber == "" ) {
        alert("Error: Please input correct fields.");

    }

    else {
        console.log("your phone number is" + " " + (phoneNumber))
    }

    var email = prompt("Enter your email:");

    if (typeof email !== 'string' || email == null || email == "" || !isNaN(email) ) {
        alert("Error: Please enter a valid email address.");

    }
    else {
        console.log("your email is " + " " + (email))
    }




    var password = prompt("Enter your password:");
    var confirmPassword = prompt("Confirm your password:");
    if (password === confirmPassword && password != null && confirmPassword != ""  ) {
        alert("You are successfully registered!");
        

    } 
    
    else {
        alert("Error: Passwords do not match. Please enter the same password in both fields.");

    }

}





// Call the registration function
registration();