import { Component } from '@angular/core';
import { UserDataService } from '../../Services/user-data.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  ages: number[] = [];
  str : any [] = [];
  constructor(private age:UserDataService){
    this.str = age.users();
     for(let i=0; i<this.str.length; i++){
          this.ages[i] = this.str[i].age;
     }
  }
}
