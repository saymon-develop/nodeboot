const { Board, Sensor, Led } = require("johnny-five");

const board = new Board();

board.on("ready", () => {
  // Create a new `photoresistor` hardware instance.
  const photoresistor = new Sensor({
    pin: "A0",
    freq: 250
  });
  const redLed = new Led(2);
  const greenLed = new Led(3);
  const blueLed = new Led(4);

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: photoresistor
  });

    // "data" get the current reading from the photoresistor
    photoresistor.on("data", function() {
      console.log(`Sensor value`, this.value);

      if(this.value <= 255) {
        redLed.on()
        greenLed.off()
        blueLed.off()
      }
      if(this.value > 255 && this.value <= 755) {
        greenLed.on()
        redLed.off()
        blueLed.off()
      }
      if(this.value > 755 && this.value <= 1024) {
        blueLed.on()
        redLed.off()
        greenLed.off()
      }
    });
});
