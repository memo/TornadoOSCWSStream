import oscP5.*;
import netP5.*;
OscP5 oscP5;
NetAddress myRemoteLocation;
int messageLength = 3;

void setup() {
  size(20, 20);
  frameRate(25);
  myRemoteLocation = new NetAddress("127.0.0.1", 8000);
  oscP5 = new OscP5(this, 8001);
}

void draw() {
  {
    OscMessage myMessage = new OscMessage("/test/1");
    myMessage.add(100000 + frameCount); 
    for (int i=0; i<messageLength; i++) {
      myMessage.add(random(0, 1000));
    }
    oscP5.send(myMessage, myRemoteLocation);
  }
  {
    OscMessage myMessage = new OscMessage("/test/2");
    myMessage.add(200000 + frameCount); 
    for (int i=0; i<messageLength; i++) {
      myMessage.add(random(0, 1000));
    }
    oscP5.send(myMessage, myRemoteLocation);
  }

  println(frameCount);
}

