var ws;
setup = function() {
    if ("WebSocket" in window) {
        ws = new WebSocket("ws://localhost:8080/websocket");
    } else {
        ws = new MozWebSocket("ws://localhost:8080/websocket");
    }

    ws.onmessage = function( event ) {
    	console.log(event.data);
        parseMessage( JSON.parse(event.data) );
    }

    ws.onopen = function( event ) {

    }
}

parseMessage = function( data ) {
    if( data.msg ) {
        $("#msg").html( data.msg )
    }
}

$(document).ready(function() {
    if (!window.console) window.console = {};
    if (!window.console.log) window.console.log = function() {};

    setup();
});
