//  Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;

function updateCount() {
  count++;
  console.log("Count:", count);
  // setTimeout takes two arguments: the function to call, and the time to wait (in milliseconds) before calling it.
  setTimeout(updateCount, 1000); // wait for 1 second (1000 milliseconds) before updating the count again.
}

updateCount();

// (Hint: setTimeout)
