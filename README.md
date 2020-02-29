# zxcvbn-wrapper
## Super basic, dependency-free implementation of [zxcvbn](https://github.com/dropbox/zxcvbn).

Plain old Vanilla JS. **No other JS libraries required**, aside from zxcvbn.js itself. 

This example is using [cdnjs.com](https://cdnjs.com/libraries/zxcvbn) to load zxcvbn.

The feedback warnings and suggestions are unmodified. They are hard-coded into zxcvbn.

### But why?
The only other implementations I've found rely on jQuery and/or Bootstrap. HTML and CSS elements are named in a way that shouldn't conflict with your existing code. I hope someone finds this helpful!

### How to use
* Add zw-script.js and zw-style.css to your page head
* Add zxcvbn.js to your page head from whatever CDN you like
* Copy HTML sections you want from index.htm
* Hope for the best

The index.htm bits are commented so it should be pretty straightforward.

#### But I want different stars!
You can redefine fill/empty star markup at the top of zw-script.js.