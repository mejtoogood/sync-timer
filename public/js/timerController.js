'use strict';

var dowdisplay;
var timerdisplay;
var statusEl;

var curDay;
var curHour;
var curMinute;

var displayReady = false;

var startTimer = function() {
  sendStartSignal();
};

var stopTimer = function() {
  sendStopSignal();
};

var resetTimer = function() {
  sendResetSignal();
}

var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

var updateDisplay = function(days, hours, minutes) {
  if (displayReady) {
    curDay = weekday[days];
    curHour = hours;
    curMinute = minutes;

    dowdisplay.innerHTML = string(curDay);
    timerdisplay.innerHTML = string(curHour) + ":" + string(curMinute);
  };
};

var getDisplayElements = function() {
  dowdisplay = document.getElementById('dow-display');
  timerdisplay = document.getElementById('timer-display');
  statusEl = document.getElementById('running-state');
  displayReady = true;
  initialize();
};
