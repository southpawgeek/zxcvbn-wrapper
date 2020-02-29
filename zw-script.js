document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    // these are your filled/unfilled stars
    var star_filled = '<span class="zw-progress__star--fill">&starf;</span>';
    var star_empty = '<span class="zw-progress__star--empty">&star;</span>';

    var pwshow = document.getElementById("zw-password__show--check");
    var pwfield = document.getElementById("zw-password__input");
    var pwwarn = document.getElementById("zw-feedback__warning");
    var pwsugg = document.getElementById("zw-feedback__suggestion");
    var pwbar = document.getElementById("zw-progress__bar--fill");
    var pwstar = document.getElementById("zw-progress__star");

    pwshow.onclick = function () {
        if (pwshow.checked === true) {
            pwfield.type = 'text';
        } else {
            pwfield.type = 'password';
        }
    };

    pwfield.onkeyup = function () {
        var result = zxcvbn(pwfield.value);
        var pwlength = pwfield.value.length;
        var barsize = result.score * 25;
        var star_pos = star_filled.repeat(result.score);
        var star_neg = star_empty.repeat(4 - result.score);

        pwstar.innerHTML = star_pos + star_neg;

        pwbar.className = '';
        pwbar.classList.add("zw-progress__bar--score" + barsize);
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

});