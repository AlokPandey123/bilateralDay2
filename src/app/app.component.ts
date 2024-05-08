import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,ParentComponent,ChildComponent,NavbarComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnguIntro';
  
}
