import {Component, OnInit} from "@angular/core";


class FileServer {
  id: number;
  name: string;
}

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverCreated: boolean;
  serverName: string;
  serverList: Array<FileServer> = [{id: 1, name: 'Microsoft'}, {id: 2, name: 'Oracle'}];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Now Server ' + this.serverName + ' was created!';
    this.serverCreated = true;
    const serverListLength: number = this.serverList.length;
    let lastServerId: number = this.serverList[serverListLength - 1].id;
    lastServerId++;
    // this.serverList[serverListLength] = {id: lastServerId, name: this.serverName};
    this.serverList.push({id: lastServerId, name: this.serverName});
    this.serverName = null;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  //   console.log(event);
  // }
}
