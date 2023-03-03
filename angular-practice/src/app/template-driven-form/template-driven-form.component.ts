import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user = {
    name: '',
    email: '',
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.user)
  }
}
