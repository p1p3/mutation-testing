import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drink: "🧃" | "🍺" | undefined;
  model: {age?: number, name: string} =  {age: undefined, name: ''}
  submitted = false;


  onSubmit() {
    this.submitted = true;
    const isAnAdult = this.model.age && this.model.age > 18;
    if(isAnAdult){
      this.drink = "🍺" ;
    }
    else{
      this.drink = "🧃";
    }
   }


}
