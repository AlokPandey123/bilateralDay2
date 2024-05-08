import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { UserDataService } from '../../Services/user-data.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  
  title = "Service in Angular";
  arr:any [] = [];
  constructor(private uses : UserDataService){
    this.arr = uses.users();
  }
  
 
}
