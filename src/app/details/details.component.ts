import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { list_Person } from '../list_Person';
import { Person } from '../interface/Person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
   constructor(private route:ActivatedRoute ,
               private location:Location
   ){  }

   elements:Person[]=  list_Person;
   item?: Person;

   ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.item= this.elements.find(person => person.id === id);
   }



}
