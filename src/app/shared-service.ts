/**
 * Created by andreykubasov on 04.05.17.
 */
import {Injectable} from '@angular/core';

class User {
  name: string;
}

@Injectable()
export class SharedService {
  currentUser: User;

  public getUser() {
    return this.currentUser;
  }

  public setuser(user: User): void {
    this.currentUser = user;
    console.log(this.currentUser);
  }
}
