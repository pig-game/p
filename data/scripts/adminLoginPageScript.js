var data = {
    'VBurden': 'PG426',
    'TGreen': 'ZK618',
    'DKennedy': 'JB393'
};

var text = document.getElementById('iscorrect');

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username in data) {
        if (data[username] === password) {
            text.innerHTML = 'Correct. Logging you on...';
            text.style.color = 'green';
            window.location.href = 'https://www.piggame.co.uk/admin/login/loginservice.html?username=' + username + '&password=' + password;
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
