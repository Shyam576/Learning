/*
    Given a positive integer millis, write a asynchronouse function that sleeps for millis milliseconds. 
    It can resolve any value.
*/

// solution
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${millis}`);
    }, millis);
  });
}

// Expertsolution
async function sleep(millis){
    await new Promise((resolve)=> setTimeout(resolve, millis));
}
