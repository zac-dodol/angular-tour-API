import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages = [];           //if want only 1 line
    this.messages.push(message);  //if want display all clicked
  }

  clear() {
    this.messages = [];
  }
}
