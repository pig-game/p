var data = {'VBurden': 'PG426',
            'TGreen': 'ZK618',
            'DKennedy': 'JB393'};
var username = 0; var password = 0; var text = document.getElementById('iscorrect');
function login() {
  var username = document.getElementById('username'); var password = document.getElementById('password'); var text = document.getElementById
  if (username in data) {
    if (data[username] == password) {
      window.location.href = 'https://www.piggame.co.uk/admin/login/loginservice?username=' + username + '&password=' + password;
    }
  } else {
    text.innerHTML = 'Incorrect username or password.';
  }
}
    
