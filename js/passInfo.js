$(document).ready(function() {
    var passwordValidated = false; // Initialize password validation status

    $("#btn-add").click(function() {
        if (passwordValidated) { // If password is validated
            $("#exampleModal").modal("show"); // Show the post form modal
        } else {
            $("#passwordModal").modal("show"); // Show the password modal
        }
    });

    $("#submitPassword").click(function() {
        var password = $("#passwordInput").val();
        
        if 
        
        (
            //passwordinfo
password === "xingfucha"
            )
        {
            passwordValidated = true; // Set password validation status to true
            $("#exampleModal").modal("show"); // Show the post form modal
            $("#passwordModal").modal("hide"); // Hide the password modal
            $("#passwordInput").val(""); // Clear password input field
        } else {
            alert("Incorrect password. Please try again.");
            $("#passwordInput").val(""); // Clear password input field
        }
    });
});
