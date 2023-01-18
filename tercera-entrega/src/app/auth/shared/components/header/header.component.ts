import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { AppState } from '../../store/app.reducer';
import { authenticatedUserSelector } from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  public user: Observable<User | null>;
  constructor(
    public readonly authService: AuthService,
    private readonly store: Store<AppState>
  ){
    this.user = this.store.select(authenticatedUserSelector)
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
