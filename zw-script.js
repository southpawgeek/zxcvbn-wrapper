/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    let pwfield = document.getElementById("zw-password__input");
    let pwshow = document.getElementById("zw-password__show--check");

    pwshow.onclick = function () {
        if (pwshow.checked === true) {
            pwfield.type = 'text';
        } else {
            pwfield.type = 'password';
        }
    };

    pwfield.onkeyup = function () {
        // these are your filled/unfilled stars
        const star_filled = '<span class="zw-progress__star--fill">&starf;</span>';
        const star_empty = '<span class="zw-progress__star--empty">&star;</span>';

        let pwwarn = document.getElementById("zw-feedback__warning");
        let pwsugg = document.getElementById("zw-feedback__suggestion");
        let pwbar = document.getElementById("zw-progress__bar--fill");
        let pwstar = document.getElementById("zw-progress__star");

        let result = zxcvbn(pwfield.value);
        let pwlength = pwfield.value.length;
        let barsize = result.score * 25;
        let star_pos = star_filled.repeat(result.score);
        let star_neg = star_empty.repeat(4 - result.score);

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