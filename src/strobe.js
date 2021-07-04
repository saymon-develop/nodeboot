var five = require('johnny-five'),
    board = new five.Board();

board.on("ready", function() {
  // // Create an Led on pin 13
  const led = new five.Led(13);
  // const a2 = new five.Led('A2');
  // var second = new five.Led('A4');
    led.blink(550)
//
  // // Strobe the pin on/off, defaults to 100ms phases

  // second.blink(50);

  // const button = new five.Button({
  //   pin: 2,
  //   // invert: true
  // });
  //
  // button.on(`press`, ()=>{
  //   console.log('hello arduino')
  //   led.on();
  //   a2.blink(50)
  // })
  //
  //
  // button.on(`release`, ()=>{
  //   console.log('vvv arduino')
  //   led.off(150);
  //   a2.blink(550)
  // })

});
