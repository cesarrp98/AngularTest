import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
   value : string = '';

   @Input() text!:string;
   @Output() textChanged = new EventEmitter<String>()

   sendValue() {
    this.textChanged.emit(this.value);
    this.value = '';
  }
}
