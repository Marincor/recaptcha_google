import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 public form: FormGroup =  this.formBuilder.group({
  email: (['', Validators.required ])
});
  errors:boolean = false;
  title = 'recaptchalab';

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {

  }

  enter() {
    if(this.form?.valid) {
      alert ('entrou')
      this.errors = false;
    } else {
      this.errors = true;
    }
  }


}
