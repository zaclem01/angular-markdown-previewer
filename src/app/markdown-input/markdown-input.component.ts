import { 
  Component, 
  Output, 
  EventEmitter,
  DoCheck
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Formatting } from '../formatting';
import { FormatBtn } from '../format-btn';
import { FileService } from '../file.service';

import { FORMAT_BTNS } from '../FORMAT-BTNS';

@Component({
  selector: 'app-markdown-input',
  templateUrl: './markdown-input.component.html',
  styleUrls: ['./markdown-input.component.css'],
  providers: [ FileService ]
})

export class MarkdownInputComponent implements DoCheck {
  // Emit any changes in input to parent container so `raw` can be updated  
  @Output() inputChange = new EventEmitter<string>();

  // Handle input internally for erasing current input, etc.
  input: string = '';
  oldInput: string = '';
  selectStart: number;
  selectEnd: number;
  exportFile: any = '';
  formatBtns: FormatBtn[] = FORMAT_BTNS;

  // Inject dependencies
  constructor(private fileService: FileService, private sanitizer: DomSanitizer) { }

  // Only emit input value if it has changed since last check
  ngDoCheck(): void {
    if (this.input != this.oldInput) {
      this.oldInput = this.input;
      this.updateFileExport();
      this.inputChange.emit(this.input);
    }
  }
 
  // User file upload
  handleFileUpload(event: any): void {
    if (event.target.files.length == 1) {
      let file = event.target.files[0];

      // Once promise is resolved set `input` and emit changes
      this.fileService.readSingleFile(file).then(contents => {
        this.input = contents;
      });
    } else if (event.target.files.length > 1) {
      let files = event.target.files;

      Promise.all(this.fileService.readMultFiles(files)).then(files => {
        this.input = files.join('\n');
      })
    }
  }

  private updateFileExport(): void {
    let file: any;
    const properties = { type: 'plain/text' };

    // Try creating File if supported, otherwise use Blob
    try {
      file = new File(this.input.split('\n'), 'markdown-export.md', properties);
    } catch(e) {
      file = new Blob(this.input.split('\n'), properties);
    }
    // Angular stops unsafe DOM manipulation so must be disabled with service
    this.exportFile = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
  }

  // Add formatting to selection and update input
  // Extend selection to include new formatting
  // TODO: Figure out how to highlight new selection
  handleBtnClick(formatting: Formatting, inputArea: any): void {
    let formatted: string;
    let selection = this.input.substring(this.selectStart, this.selectEnd);

    if (formatting.wrap) {
      formatted = this.input.substring(0, this.selectStart) + formatting.value + selection + formatting.value + this.input.substring(this.selectEnd);
      this.selectEnd += formatting.value.length * 2;
    } else {
      formatted = this.input.substring(0, this.selectStart) + formatting.value + selection + this.input.substring(this.selectEnd);
      this.selectEnd += formatting.value.length;
    }
    this.input = formatted;

    inputArea.setSelectionRange(this.selectStart, this.selectEnd);
  }

  // Update selection every time input changes or mouse is pressed or dragged
  updateSelected(inputArea: any): void {
    this.selectStart = inputArea.selectionStart;
    this.selectEnd = inputArea.selectionEnd;
  }
}
