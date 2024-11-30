/*
ϟAdmin login serviceϟ
*/

//ϟcreate variablesϟ
const urlParams = new URLSearchParams(window.location.search); const urlusername = urlParams.get('username'); const urlpassword = urlParams.get('password');
/*var z = Math.floor(Math.random() * 1000000000000);
document.write("Session ID: " + z);
sessionStorage.setItem('session-id', z);*/


//Head to admin home screen

window.location.replace('https://www.piggame.co.uk/admin/dashboard/home');
