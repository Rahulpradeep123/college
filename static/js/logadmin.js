function promptForAdminPassword() {
    var password = prompt("Enter admin password:");
    if (password === "computer") {
        window.location.href = "/admin_login"; 
    } else {
        alert("Incorrect password. Access denied.");
    }
}


