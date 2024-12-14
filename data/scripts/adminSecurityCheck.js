//hack prevention
console.info('ϟSCRIPT-LOAD: adminSecurityCheck.js [SUCCESFUL]');
var ca = sessionStorage.getItem('currentAccount'); var referrer = document.referrer;
if (referrer == '') {
  window.location.replace('https://www.piggame.co.uk/admin/login?source=loginsericewrongurl');
} else if (referrer) {
  if (ca == null) {
    //continue
  } else {
    window.location.replace('https://www.piggame.co.uk/admin/login?source=loginsericeusernameinsessionstorage');
  }
}
console.info('Hack checks did not detect any hacks.');
