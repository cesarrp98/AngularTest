import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../interface/Person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 @Input() elements!:Person[];
 @Output() itemSelected = new EventEmitter<Person>();
 item!: Person ;

 sendItemSelected (item:Person) {
  this.itemSelected.emit(item)
 }
}
