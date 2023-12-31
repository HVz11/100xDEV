// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// function clock() {
//     const date = new Date();
//     const hours = date.getHours();
//     const ampm = hours >= 12 ? 'PM' : 'AM';

//     const displayHours = hours % 12 || 12;

//     console.log(
//       ` ${displayHours}:${date.getMinutes()}:${date.getSeconds()} ${ampm}`
//     );
//   }

//   setInterval(clock, 1000);

let hour, minute, second;
let intervalId;

function startClock() {
  let now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  counterElement.innerHTML = `${hour}:${minute}:${second}`;
}

function stopClock() {
  clearInterval(intervalId);
}

intervalId = setInterval(startClock, 1000);
