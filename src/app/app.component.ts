import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'chat';
  
  users = []
  message_list = [];

  constructor(
    private socket: Socket
  ) {  }

  ngOnInit(): void {
    this.socket.connect();

    let sock = this.socket;
    sock.on('recived', data => {
      this.message_list.push(data)
    })

  }

  random(lengthOfCode: number) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890asdfghjklqwertyuioopzxcvbnm";
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }

  addChat(addForm: NgForm) {
    let random = this.random(32);
    let name = addForm.value.name
    if(name != '') {
      this.users.push({name: name, key: random})    
    }
  }

  onSubmit(chat: NgForm, obj) {
    let msg = chat.value.msg
    let data = {
      name: obj.name,
      msg: msg
    }

    this.socket.emit('sender', data)

    chat.setValue({msg: ''})
    
  }

  hapusChat(itemChat) {
    var index = this.users.indexOf(itemChat);
    this.users.splice(index, 1);
    
  }

}
