/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    const start = Atomics.load(new Int32Array(new SharedArrayBuffer(4)), 0);
    while (
      Atomics.load(new Int32Array(new SharedArrayBuffer(4)), 0) - start <
      milliseconds
    ) {
      // Do nothing
    }
    resolve();
  });
}

module.exports = sleep;
