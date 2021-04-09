import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = 'asd';
  userName = '';
  serverCreated = false;
  servers = ['testServerOne', 'testServerTwo', 'testServerThree'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    console.log('ev', event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  updateUserName(event) {
    this.userName = event.target.value;
  }
  resetUserName() {
    this.userName = '';
  }

  // toggleBtnDisable() {
  //   if (this.userName === '') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }   lub w html !!!!!!!!!!!
}
