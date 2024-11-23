/*
ϟAdmin login serviceϟ
*/

//ϟcreate variablesϟ
const urlParams = new URLSearchParams(window.location.search); const urlusername = urlParams.get('username'); const urlpassword = urlParams.get('password');
document.write("Hey, " + urlusername + "! I'm still coding this part of the Admin site. Sorry.");
var ca = sessionStorage.getItem('currentAccount'); var referrer = document.referrer;
if (referrer == '') {
  window.location.href = 'https://www.piggame.co.uk/admin/login?source=loginsericewrongurl';
} else {
  if (ca == null) {
    sessionStorage.setItem('currentAccount', urlusername);
  } else {
    window.location.href = 'https://www.piggame.co.uk/admin/login?source=loginsericeusernameinsessionstorage';
  }
}
