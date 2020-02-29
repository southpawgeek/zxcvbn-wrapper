var pwshow = document.getElementById("pwshow");
var pwfield = document.getElementById("pword");
var pwwarn = document.getElementById("warning");
var pwsugg = document.getElementById("suggestions");
var pwbar = document.getElementById("progress_bar");
var pwstar = document.getElementById("pwstar");

pwshow.onclick = function () {
    'use strict';
    if (pwshow.checked === true) {
        pwfield.type = 'text';
    } else {
        pwfield.type = 'password';
    }
};

pwfield.onkeyup = function () {
    'use strict';
    var result = zxcvbn(pwfield.value);
    var pwlength = pwfield.value.length;
    var barsize = result.score * 25;
    var star_pos = '<i class="material-icons">star</i>';
    var star_neg = '<i class="material-icons">star_outline</i>';
    star_pos = star_pos.repeat(result.score);
    star_neg = star_neg.repeat(4 - result.score);

    pwstar.innerHTML = star_pos + star_neg;

    pwbar.className = '';
    pwbar.classList.add("score" + barsize);
    pwwarn.innerHTML = result.feedback.warning;
    pwsugg.innerHTML = result.feedback.suggestions;

    if (result.score === 3) {
        if (pwlength < 11) {
            pwwarn.innerHTML = 'Try adding more characters.';
        } else {
            pwwarn.innerHTML = 'Just a little bit more...';
        }
    }
    if (result.score === 4) {
        pwwarn.innerHTML = 'Strong password!';
    }
};