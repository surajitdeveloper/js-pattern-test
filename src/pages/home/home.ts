import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todo = {pattern: "", string: ""}
  logForm() {
    console.log(this.todo);
    let pattern = this.todo.pattern;
    let string = this.todo.string;
    let ret_str = "";
    let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    for(let i =0; i < string.length;i++)
    {
      
      if(typeof pattern[i] != "undefined")
      {
        console.log(string[i]);
        switch(pattern[i])
        {
          case '9':
            if(!isNaN(parseInt(string[i]))) ret_str += string[i];
            break;
          case 'A':
            if(string[i].match(/[A-Z]/i)) ret_str += string[i];
            break;
          case '*':
            if(!format.test(string[i])) ret_str += string[i];
            break;
          default:
            if(string[i] != pattern[i]) {ret_str += pattern[i]+string[i];} else { ret_str += pattern[i]; }
            break;

        }
      }
    }
    this.todo.string = ret_str.toString();
  }

  constructor(public navCtrl: NavController) {

  }

}
