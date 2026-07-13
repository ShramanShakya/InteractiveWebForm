document.getElementById("submitBtn").addEventListener("click", function (e) {

    e.preventDefault();

    // Clear previous errors
    clearError("username");
    clearError("email");
    clearError("password");
    clearError("confirmPassword");

    document.getElementById("topicError").textContent = "";
    document.getElementById("genderError").textContent = "";

    let valid = true;

    // Validate Username
    if (document.getElementById("username").value.trim() === "") {
        showError("username", "this field must not be empty");
        valid = false;
    }

    // Validate Email
    if (document.getElementById("email").value.trim() === "") {
        showError("email", "this field must not be empty");
        valid = false;
    }

    // Validate Password
    if (document.getElementById("password").value.trim() === "") {
        showError("password", "this field must not be empty");
        valid = false;
    }

    // Validate Confirm Password
    if (document.getElementById("confirmPassword").value.trim() === "") {
        showError("confirmPassword", "this field must not be empty");
        valid = false;
    }

    // Password Match
    if (
        document.getElementById("password").value !== "" &&
        document.getElementById("confirmPassword").value !== "" &&
        document.getElementById("password").value !==
        document.getElementById("confirmPassword").value
    ) {
        showError(
            "confirmPassword",
            "confirmed password mismatched the password"
        );
        valid = false;
    }

    
    let topics = document.querySelectorAll(".topic");
    let checked = false;

    topics.forEach(function (topic) {
        if (topic.checked) {
            checked = true;
        }
    });

    if (!checked) {
        document.getElementById("topicError").textContent =
            " At least one topic must be selected";
        valid = false;
    }

    // Gender Validation
    if (document.getElementById("gender").selectedIndex === 0) {
        document.getElementById("genderError").textContent =
            " please choose your gender";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }

});

function showError(id, message) {

    document.getElementById(id).style.borderColor = "red";
    document.getElementById(id + "Error").textContent = message;

}


function clearError(id) {

    document.getElementById(id).style.borderColor = "";
    document.getElementById(id + "Error").textContent = "";

}