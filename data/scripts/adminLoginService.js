/*
ϟAdmin login serviceϟ
*/

//ϟcreate variablesϟ
const urlParams = new URLSearchParams(window.location.search); const username = urlParams.get('username'); const password = urlParams.get('password');
/*var z = Math.floor(Math.random() * 1000000000000);
document.write("Session ID: " + z);
sessionStorage.setItem('session-id', z);*/
var data = {
    'VBurden': 'PG426',
    'TGreen': 'ZK618',
    'DKennedy': 'JB393',
    'OVermunt': 'HE734FHG67'
};
var ranks = {
    'VBurden': 'basic',
    'TGreen': 'senior',
    'DKennedy': 'senior',
    'OVermunt': 'full'
};
if (username in data) {
    if (data[username] === password) {
        sessionStorage.setItem('currentAccount', username);
        sessionStorage.setItem('userRank', ranks[username]);
    } else {
        window.location.replace('https://www.piggame.co.uk/admin/login');
    }
} else {
    window.location.replace('https://www.piggame.co.uk/admin/login');
}

//Head to admin home screen

window.location.replace('https://www.piggame.co.uk/admin/dashboard/home');
