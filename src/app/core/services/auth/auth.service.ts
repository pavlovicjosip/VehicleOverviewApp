import { Injectable } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private users: User[] = [];

  private authenticated: boolean = false;

  constructor() {}

  signIn(username: string, password: string): boolean {
    const userExists = this.users.some((u) => u.username === username);
    if (userExists) {
      return false;
    } else {
      this.users.push({ username, password });
      return true;
    }
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      this.authenticated = true;
      return true;
    } else {
      return false;
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  logout(): void {
    this.authenticated = false;
  }

}
