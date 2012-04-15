var ws;
setupWebsocket = function() {
    if ("WebSocket" in window) {
        ws = new WebSocket("ws://localhost:8080/websocket");
    } else {
        ws = new MozWebSocket("ws://localhost:8080/websocket");
    }

    ws.onmessage = function( event ) {
        console.log(JSON.parse(event.data));
    }

    ws.onopen = function( event ) {

    }
}

setupWebsocket();
