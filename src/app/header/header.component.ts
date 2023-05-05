import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  linkClickedEmitter: EventEmitter<string> = new EventEmitter<string>();

  onSelectLink(event: string) {
    this.linkClickedEmitter.emit(event);
  }

}
