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
var username = sessionStorage.getItem('currentAccount'); 
var rank = sessionStorage.getItem('userRank');
if (username in data) {
    if (ranks[username] == rank) {
        //continue
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
