import { Component } from '@angular/core';

interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  gender: IGender,
  isActive: boolean
}

enum IGender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appdemo';

  user: IUser = {
    id: 101,
    firstName: 'John',
    lastName: 'Doe',
    gender: IGender.MALE,
    isActive: true
  } 

  
}
