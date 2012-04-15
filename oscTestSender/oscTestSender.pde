import oscP5.*;
import netP5.*;
OscP5 oscP5;
NetAddress myRemoteLocation;
int i=0;

void setup() {
  size(20, 20);
  frameRate(25);
  myRemoteLocation = new NetAddress("127.0.0.1", 8000);
  oscP5 = new OscP5(this, 8001);
}

void draw() {
  OscMessage myMessage = new OscMessage("/test");
  myMessage.add(i); 
  myMessage.add(i*2); 
  myMessage.add(i*4); 
  myMessage.add(i*10); 
  myMessage.add(random(0, 1000));
  oscP5.send(myMessage, myRemoteLocation); 
  println(i);
  i++;
}

