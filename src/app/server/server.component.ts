import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number;
  serverStatus: string;
  isServerOnline = false;

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    const randomValue: number = Math.random();
    this.isServerOnline = randomValue > 0.5;
    this.serverStatus = this.isServerOnline ? 'online' : 'offline';
    this.serverId = this.isServerOnline ? Math.trunc(randomValue * 10) : null;
  }

  getColor(): string {
    return this.isServerOnline ? 'green' : 'red';
  }
}
