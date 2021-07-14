var five = require('johnny-five'),
    board = new five.Board();

board.on("ready", function() {
    const right = new Motor({
        pins: {
          pwm: 8,
          dir: 9
        }
      });

    const left = new Motor({
        pins: {
          pwm: 6,
          dir: 7
        }
      });
    
      board.repl.inject({
        motor
      });
    
      motor.on("start", () => {
        console.log(`start: ${Date.now()}`);
      });
    
      motor.on("stop", () => {
        console.log(`automated stop on timer: ${Date.now()}`);
      });
    
      motor.on("forward", () => {
        console.log(`forward: ${Date.now()}`);
    
        // demonstrate switching to reverse after 5 seconds
        board.wait(5000, () => motor.reverse(50));
      });
    
      motor.on("reverse", () => {
        console.log(`reverse: ${Date.now()}`);
    
        // demonstrate stopping after 5 seconds
        board.wait(5000, motor.stop);
      });
    
      // set the motor going forward full speed
      motor.forward(255);
});
