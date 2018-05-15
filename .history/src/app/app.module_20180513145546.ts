import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeysService } from './keys.service';
import { HttpModule } from '@angular/http';
import { FilterJsonPipe } from './filter-json.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterJsonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [KeysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
