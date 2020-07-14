import { Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) {
    this.clients = this.clientService.getClients();
  }

  ngOnInit(): void {}

  deleteClient(uid) {
    const clientIndex = this.clients.map((client) => client.uid).indexOf(uid);
    return this.clients.splice(clientIndex, 1);
  }
}
