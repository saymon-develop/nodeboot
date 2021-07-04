const {Board, Sensor, Led} = require("johnny-five");

const board = new Board();

board.on("ready", () => {
  const potentiometer = new Sensor("A0");
  const led = new Led(3);

  potentiometer.on("change", () => {
    const {value, raw} = potentiometer;

    const newLedBrightness = Math.floor(value / 4) < 10 ? 0 : Math.floor(value / 4)

    led.brightness(newLedBrightness);
    console.log("Sensor: ");
    console.log("  value  : ", value);
    console.log("  newLedBrightness  : ", newLedBrightness);
    console.log("  raw    : ", raw);
    console.log("-----------------");
  });
});
