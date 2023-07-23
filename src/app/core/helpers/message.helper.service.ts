import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessageHelperService {

  constructor(private messageService: MessageService) { }

  showMessage(servierity: string, summary: string, details: string) {
    this.messageService.add({
      severity: servierity,
      summary: summary,
      detail: details,
    });
  }
}
