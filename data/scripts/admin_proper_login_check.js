var data = {
    'VBurden': 'PG426',
    'TGreen': 'ZK618',
    'DKennedy': 'JB393',
    'OVermunt': 'HE734FHG67'
};
var ranks = {
    'VBurden': 'Basic',
    'TGreen': 'Senior',
    'DKennedy': 'Basic',
    'OVermunt': 'Full'
};
if (username in data) {
    if (data[username] === password) {
        sessionStorage.setItem('currentAccount', username);
        sessionStorage.setItem('userRank', ranks[username]);
    } else {
        sessionStorage.setItem('errorText', 'Your account data was not right. This could be caused by going to the Admin Home Page without going through the login page. Otherwise, this is probably just a rare error. If this happens again, please contact <a href="mailto:odhran.vermunt@gmail.com">Odhran Vermunt</a>.');
        sessionStorage.setItem('buttonText', 'Click here to continue');
        sessionStorage.setItem('buttonSite', 'https://www.piggame.co.uk/admin/login');
        window.location.replace('https://www.piggame.co.uk/admin/error');
    }
} else {
    sessionStorage.setItem('errorText', 'Your account data was not right. This could be caused by going to the Admin Home Page without going through the login page. Otherwise, this is probably just a rare error. If this happens again, please contact <a href="mailto:odhran.vermunt@gmail.com">Odhran Vermunt</a>.');
    sessionStorage.setItem('buttonText', 'Click here to continue');
    sessionStorage.setItem('buttonSite', 'https://www.piggame.co.uk/admin/login');
    window.location.replace('https://www.piggame.co.uk/admin/error');
}
