import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'chat-block',
    template: `
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          {{nama}}
        </div>
        <div class="card-body">
          <div class="chat-body">
            <div><strong>Dani: </strong> <span>Message</span></div>
          </div>
        </div>
        <div class="card-footer pb-0">
          <div class="form-group row">
            <input type="text" class="form-control col-8 r-0">
            <button class="btn btn-primary col-4 r-0">Send</button>
          </div>
        </div>
      </div>
    </div>
    `
})
  
  export class ChatBlock implements OnInit {
    @Input() nama;
    

    constructor() {

    }

    ngOnInit() {
        console.log(this.nama);
        
    }
     
  }