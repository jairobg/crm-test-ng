import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static getUsers(): User[] {
    throw new Error("Method not implemented.");
  }
  users: User[];
  constructor() {
    const user1: User = {
      uid: 1,
      fname: 'Jairo',
      lname: 'Botero',
      email: 'jairo.botero@gmail.com',
      pass: '123'
    };
    const user2: User = {
      uid: 2,
      fname: 'Andres',
      lname: 'Montoya',
      email: 'andy@gmail.com',
      pass: '123'
    };
    const user3: User = {
      uid: 3,
      fname: 'Ana',
      lname: 'Zuluaga',
      email: 'ana@gmail.com',
      pass: '123'
    };
    const user4: User = {
      uid: 4,
      fname: 'Eliana',
      lname: 'Cuervo',
      email: 'ely@gmail.com',
      pass: '123'
    };
    this.users = [user1, user2, user3, user4];
  }

  getUsers() {
    return this.users;
  }
}
