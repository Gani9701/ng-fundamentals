import { Injectable } from '@angular/core'
import { IUser } from './user.modal'; 

@Injectable()
export class AuthService {
  currentUser:IUser|any;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Ganesh',
      lastName: 'Tungala'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:any,lastName:any){

    this.currentUser.firstName =  firstName;
    this.currentUser.lastName = lastName

  }

}