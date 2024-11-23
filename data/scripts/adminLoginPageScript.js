var data = {
    'VBurden': 'PG426',
    'TGreen': 'ZK618',
    'DKennedy': 'JB393'
};

function login() {
    console.log("Login function called"); // Debugging step
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var text = document.getElementById('iscorrect');

    console.log("Username: " + username); // Debugging step
    console.log("Password: " + password); // Debugging step
    
    if (username in data) {
        if (data[username] === password) {
            text.innerHTML = 'Correct. Logging you on...';
            text.style.color = 'green';
            window.location.replace('https://www.piggame.co.uk/admin/login/loginservice.html?username=' + username + '&password=' + password);
        } else {
            text.innerHTML = 'Incorrect username or password.';
            text.style.color = 'red';
        }
    } else {
        text.innerHTML = 'Incorrect username or password.';
        text.style.color = 'red';
    }

    return false; // Prevent form submission
}
