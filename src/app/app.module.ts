import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MarkdownInputComponent } from './markdown-input/markdown-input.component';
import { MarkdownOutputComponent } from './markdown-output/markdown-output.component';
import { FormatButtonComponent } from './format-button/format-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownInputComponent,
    MarkdownOutputComponent,
    FormatButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
