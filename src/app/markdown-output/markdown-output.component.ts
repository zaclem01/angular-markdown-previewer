import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-markdown-output',
  templateUrl: './markdown-output.component.html',
  styleUrls: ['./markdown-output.component.css']
})
export class MarkdownOutputComponent {
  @Input() formattedOutput: string;
}
