//making a beep for every argument added into the console
const timerArr = process.argv.slice(2);

timerArr.forEach(time => {
  //will only run if the number is greater than 0 and is a number
  if(time > 0) {
    setTimeout(() => {
      console.log(`Beeps at ${time} seconds.`)
      process.stdout.write('\x07'); //creates a beep sound on the time its comes up
    }, time * 1000); // sets the beep for what time is added * 1 sec
  }
});