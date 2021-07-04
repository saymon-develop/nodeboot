const {Board, Button, Led} = require("johnny-five");
const board = new Board();

const getHex = (size = 6) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
const getRandomHex = () => {
  let randomColor = getHex()
  return `#${randomColor}`;
}

board.on("ready", () => {
  const colorChanger = new Button(2);
  const toggleRGB = new Button(7);
  const rgb = new Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  let rgbEnabled = false;
  let prevColor = `#ffffff`;

  colorChanger.on("release", function() {
    if(rgbEnabled) {
      const color = getRandomHex()
      console.log(`color: %c${color}`, `color: red;`);
      rgb.color(color)
      prevColor = color
    }
  });

  toggleRGB.on(`release`, () => {
    if(!rgbEnabled) {
      rgb.color(prevColor)
      rgb.on()
      rgbEnabled = true
    } else {
      rgb.off()
      rgbEnabled = false
    }
  })
});
