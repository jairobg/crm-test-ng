import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Client[];
  constructor() {
    const client1: Client = {
      uid: 1,
      fname: 'Mike',
      lname: 'Pense',
      email: 'mp@gmail.com',
      phone: '555123123',
      address: '123 Ocean DR'
    };
    const client2: Client = {
      uid: 2,
      fname: 'Jacov',
      lname: 'Moubio',
      email: 'jm@gmail.com',
      phone: '555321321',
      address: '321 Park Rd'
    };
    const client3: Client = {
      uid: 3,
      fname: 'Nicole',
      lname: 'Obrian',
      email: 'no@gmail.com',
      phone: '555890890',
      address: '321 Black bourne Av'
    };
    const client4: Client = {
      uid: 4,
      fname: 'Kerin',
      lname: 'Capital',
      email: 'kc@gmail.com',
      phone: '555432123',
      address: '21 Limes Farm DR'
    };
    const client5: Client = {
      uid: 5,
      fname: 'Julian',
      lname: 'Wolf',
      email: 'jw@gmail.com',
      phone: '555234123',
      address: '32 Mac Rd'
    };
    this.clients = [client1, client2, client3, client4, client5];
   }

   getClients(){
     return this.clients;
   }

   addClient(client: Client){
     this.clients.push(client);
   }
}
