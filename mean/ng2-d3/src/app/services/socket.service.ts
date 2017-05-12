import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client/dist/socket.io';

export class SocketService {
  private url = 'http://127.0.0.1:4000';  
  private socket;

	constructor(){
		
    this.socket = io.connect(this.url);
		console.log(this.socket);
	}
  
  sendMessage(message){
    this.socket.emit('add-message', message);    
  }
  
  getMessages() {
    let observable = new Observable(observer => {
      // this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);    
      });
      return () => {
        // this.socket.disconnect();
      };  
    })     
    return observable;
  }  

  getNewVote() {
    let observable = new Observable(observer => {
      // this.socket = io(this.url);
      this.socket.on('vote', (data) => {
//		  console.log(data);
        observer.next(data);    
      });
      return () => {
        // this.socket.disconnect();
      };  
    })     
    return observable;
  }  

	sendVote(vote){
		console.log(vote);
    	this.socket.emit('send:vote', vote);  
//		alert('vote sent');
	}
}
