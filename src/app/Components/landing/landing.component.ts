import { Component } from '@angular/core';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  // (2)	Object of Store class.
  ourStore: Store = new Store(
    'Mr Robot',
    ['KFS', 'Cairo', 'Egypt'],
    './assets/logo.jpg'
  );
}
