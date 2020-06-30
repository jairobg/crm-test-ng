import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clients: Client[];
  constructor(private clientService: ClientService) {
    this.clients = this.clientService.getClients();
  }

  ngOnInit(): void {
  }

  deleteClient(uid) {
    const clientIndex = this.clients.map(client => client.uid).indexOf(uid);
    return this.clients.splice(clientIndex, 1);
  }
}
