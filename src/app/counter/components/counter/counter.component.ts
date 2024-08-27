import { Component } from "@angular/core";

@Component({
    selector:'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent{

    public title: string = 'Aquí se Cuenta';
    public counter: number = 0;
  
    operar(cuanto:number):void{
      this.counter += cuanto;
    }
    
    resetear(){
      this.counter= 0
    }

}