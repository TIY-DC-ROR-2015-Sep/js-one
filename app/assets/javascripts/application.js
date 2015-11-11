// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

// window.location = "http://google.com"
// window.onload = function() { alert("loaded"); }


function addCounterHandlers() {
  var count = 0;

  var incButtons = document.querySelectorAll(".increment-counter");
  var displayNode = document.querySelector("span.counter-display");

  // incButtons.each do |incButton|
  for (var i = 0; i < incButtons.length; i ++) {
    var incButton = incButtons[i];
    incButton.addEventListener("click", function(e) {
      // This stops the link from actually making a GET request
      e.preventDefault();

      // alert("Button was clicked");
      if (count < 10) {
        count += 1;
        displayNode.innerText = count;
      } else {
        displayNode.innerHTML = '<img src="https://i.imgflip.com/txo8v.jpg">';
      }

      // Here's one way to grab the node that was clicked ...
      var clicked = e.target;
      // ... and do something with it
      var newNode = document.createElement("span");
      newNode.innerText = "·";
      clicked.appendChild(newNode);
    });
  }
}

function addOneButtonToggle(button) {
  button.addEventListener("click", function() {
    var form = button.parentNode.querySelector(".echo-form");
    if (form.style.display === "none") {
      form.style.display = "block";
      button.innerHTML = "Hide";
    } else {
      form.style.display = "none";
      button.innerHTML = "Show";
    }
  })
}

function addFormToggle() {
  var toggleButtons = document.querySelectorAll(".toggle-form");
  for (var i = 0; i < toggleButtons.length; i++) {
    var b = toggleButtons[i];
    addOneButtonToggle(b);
  }
}

window.onload = function() {
  addCounterHandlers();
  addFormToggle();
}
