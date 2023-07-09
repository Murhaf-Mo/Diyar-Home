import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  public randomNumber = Math.floor(Math.random() * 1000) + 1;
  private connection: HubConnection;
  public messages: any[] = [];
  public user: string = "Anonymous";
  public message: string = "";
  public date: Date = new Date();


  constructor() {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:7084/chat')
      .build();
  }

  async ngOnInit() {
    this.connection.on('ReceiveMessage', (message) => {
      const messageParts = message.split(':');
      const messageObject = {
        user: messageParts[0].trim(),
        message:(messageParts[1].trim()),
        reply: messageParts[0].trim() === "Anonymous" + this.randomNumber,
        avatar: 'https://i.pravatar.cc/300',

      };
      console.log(messageObject);
      console.log(messageObject.reply)
      this.messages.push(messageObject);
    });

    try {
      await this.connection.start();
      console.log('Connected to SignalR hub');
    } catch (error) {
      console.error('Failed to connect to SignalR hub', error);
    }
  }

  async sendMessage(event: any) {
    if (!event.message) return;
    const message = `Anonymous${this.randomNumber}: ${event.message}`;
    await this.connection.invoke('SendMessage', message);
    this.message = '';
  }
}
