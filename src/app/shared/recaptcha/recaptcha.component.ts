import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.scss']
})
export class RecaptchaComponent implements OnInit {

  recaptchaV2_SITE_KEY = environment.recaptchaV2_SITE_KEY;

  constructor(  private recaptchaV3Service: ReCaptchaV3Service) { }


  ngOnInit(): void {
    this.executeImportantAction();
  }

  public executeImportantAction(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => console.log('token', token));
  }

}
