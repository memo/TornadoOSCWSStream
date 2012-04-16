setupWebsocket = function() {
	var ws;
    if ("WebSocket" in window) {
        ws = new WebSocket("ws://localhost:80/websocket");
    } else {
        ws = new MozWebSocket("ws://localhost:80/websocket");
    }

    ws.onmessage = function( event ) {
        var data = JSON.parse(event.data);
        var addr = data.addr;
        var value = data.value;
        
         console.log(addr, value, data);
        
        var s = "";
        var olds = document.getElementById("msg").innerHTML.split("\n");
        for(var i=olds.length-20; i<olds.length; i++) {
           	if(i>=0) s += olds[i] + "\n";  
        }
        
        s += "<p>" + addr + " : ";
        for(var i=0; i<value.length; i++) {
        	s += "[" + i + ": " + value[i] + "] ";
        }
        s += "</p>\n";
        document.getElementById("msg").innerHTML = s;
    }

    ws.onopen = function( event ) {
    }
}

setupWebsocket();
