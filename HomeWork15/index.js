let form  = document.getElementsByTagName('form')[0];
let email = document.getElementById('mail');

var error = email;
while ((error = error.nextSibling).nodeType != 1);

let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function addEvent(element, event, callback) {
  var previousEventCallBack = element["on"+event];
  element["on"+event] = function (e) {
    var output = callback(e);

    if (output === false) return false;
if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if(output === false) return false;
    }
  }
};

addEvent(window, "load", function () {

var test = email.value.length === 0 || emailRegExp.test(email.value);
email.className = test ? "valid" : "invalid";
});

addEvent(email, "input", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

addEvent(form, "submit", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);

  if (!test) {
    email.className = "invalid";

    return false;
  } else {
    email.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }
});


var password = document.getElementById('password');
var error = password;
var passwordRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/


addEvent(window, "load", function () {
 var test = password.value.length === 0 || passwordRegExp.test(password.value);

  password.className = test ? "valid" : "invalid";
});

addEvent(password, "input", function () {
  var test = password.value.length === 0 || passwordRegExp.test(password.value);
  if (test) {
    password.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  } else {
    password.className = "invalid";
  }
});

addEvent(form, "submit", function () {
  var test = password.value.length === 0 || passwordRegExp.test(password.value);

  if (!test) {
    password.className = "invalid";
    return false;
  } else {
    password.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }
});