import { Component } from '@angular/core';

import { MarkdownService } from './markdown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MarkdownService ]
})

export class AppComponent {
  raw = '';

  constructor(private markdownService: MarkdownService) { }

  handleInput(value: string): void {
    this.raw = value;
  }

  parseRaw(): string {
    return this.markdownService.safeParse(this.raw);
  }
}
