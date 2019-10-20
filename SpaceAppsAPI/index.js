const SerialPort = require('serialport');
const port = new SerialPort("COM7", {
    baudRate: 9600
});

port.on('data',data => {
    const obj = JSON.parse(data)
    console.log(`Time: ${obj.time} Read: ${obj.data}`)
  })