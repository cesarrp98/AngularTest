import { Component } from '@angular/core';
import { Person } from '../interface/Person';
import { list_Person } from '../list_Person';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  elements!:Person[];
  showNoResultsMessage: boolean = false;
  ngOnInit(): void {
    this.elements = list_Person;
  }

   item?: Person ;
   textChanged?: string;

   getItemSelect ( item:Person){
    this.item = item;
   }

   getTextChanged (searchText:String) {
    if (!searchText) {
      this.elements = list_Person;
      this.showNoResultsMessage = false;
      return;
    }

    const lowerCaseSearchText = searchText.toLowerCase();
    this.elements = this.elements.filter(person =>
      person.id.toString().includes(lowerCaseSearchText) ||
      person.name.toLowerCase().includes(lowerCaseSearchText) ||
      person.description.toLowerCase().includes(lowerCaseSearchText)
    );


    if (this.elements.length > 0) {
      this.elements = this.elements;
      this.showNoResultsMessage = false;
    } else {
      this.elements = list_Person;
      this.showNoResultsMessage = true;
    }
   }
}
