const express = require('express');
const app = express();
// const SerialPort = require('serialport');
// const port = new SerialPort("COM7", {baudRate: 9600});


app.get('/api/measures', (req, res) => {
    // let measures_parsed = null;
    // port.on('data',data => {
    //     measures_parsed = JSON.parse(data)
    //     console.log(data)
    //     port.close()
    // })
    let newJson = {data: 0}
    newJson.data = Math.floor(Math.random() * 6)
    console.log("Get sent")
    res.jsonp(newJson)
})

const listenPort = process.env.PORT || 3000;
app.listen(listenPort, () => console.log(`Listening on port ${listenPort}...`));
