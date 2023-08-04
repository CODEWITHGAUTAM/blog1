import { Component } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  title='For Loop';
  users=['Anil','Gautam','Arti','Raman','Pawan','Ankita'];

  userDetails=[
    {name:'Anil',email:'anil@gmail.com',phone:'8854'},
    {name:'Gautam',email:'gautam@gmail.com',phone:'7854'},
    {name:'Arti',email:'arti@gmail.com',phone:'6654'},
    {name:'Raman',email:'raman@gmail.com',phone:'78754'}

  ];
  


  
  

}
