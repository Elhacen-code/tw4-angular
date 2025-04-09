import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, UserListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
}
