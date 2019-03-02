var pwshow  = document.getElementById("pwshow")  
var pwfield = document.getElementById("pword")
var pwscore = document.getElementById("pwscore")
var pwwarn  = document.getElementById("warning")
var pwsugg  = document.getElementById("suggestions")
var pwbar   = document.getElementById("progress_bar")

pwshow.onclick = function(){
if (pwshow.checked == true) {
pwfield.type = 'text'
}
else {
pwfield.type = 'password'
}
}

pwfield.onkeyup = function(){
result = zxcvbn(pwfield.value)
barsize = result.score * 25;
pwbar.className = '';
pwbar.classList.add("score"+barsize)
pwlength = pwfield.value.length
pwscore.innerHTML = result.score + ":" + pwlength
pwwarn.innerHTML = result.feedback.warning
pwsugg.innerHTML = result.feedback.suggestions
if (result.score == 3) {
    if (pwlength < 11) {
        pwwarn.innerHTML = 'You need at least 11 characters.';    
    } else {
        pwwarn.innerHTML = 'Just a little bit more...';
    }
}
if (result.score == 4) {
    pwwarn.innerHTML = 'Strong password!';
}
}