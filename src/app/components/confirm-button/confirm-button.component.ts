import { Component, EventEmitter, Input, Output } from '@angular/core';

type TypeButton = "submit" | "button"

@Component({
  selector: 'app-confirm-button',
  standalone: true,
  imports: [],
  templateUrl: './confirm-button.component.html',
  styleUrl: './confirm-button.component.scss'
})
export class ConfirmButtonComponent {
  @Input() type: TypeButton = "button";
  @Output() buttonClick = new EventEmitter();

  onClick() {
    this.buttonClick.emit();
  }
}
