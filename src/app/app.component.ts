import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cookingBook'; 

  navName = 'recipes';

  reciveSelected(feature: string){
    this.navName = feature;
  }
}
