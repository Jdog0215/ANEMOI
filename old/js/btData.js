var macArduinoBT = "20:15:07:29:12:11";

var app = 
{
    initialize: function(){
        this.bindEvents();
    },
    bindEvents: function(){
        document.addEventListener('deviceready',this.onDeviceReady,false);
    },
    onDeviceReady: function(){
        bluetoothSerial.connect(macArduinoBT,app.Connect,app.onDisconnect);
    },
    onConnect: function(){
        bluetoothSerial.subscribe("\n",app.onMessage,app.subscribeFailed);
        statusDiv.innerHTML = "Conectado a "+ macArduinoBT + ".";
    },
    onDisconnect: function(){
        alert("Disconnected");
        statusDiv.innerHTML = "Desconectado.";
    },
    onMessage: function(data){
        counter.innerHTML = data;
    },
    subscribeFailed: function(){
        alert("subscribe failed");
    }
};