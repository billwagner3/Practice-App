import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeysService } from './keys.service';
import { HttpModule } from '@angular/http';
import { FilterJsonPipe } from './filter-json.pipe';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FilterJsonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [KeysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
