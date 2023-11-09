import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
