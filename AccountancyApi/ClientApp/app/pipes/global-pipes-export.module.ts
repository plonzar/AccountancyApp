import { CurrencyPipe } from './currency.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CurrencyPipe
  ],
  imports: [

  ],
  exports:[
    CurrencyPipe
  ]

})
export class GlobalPipesExportModule { }