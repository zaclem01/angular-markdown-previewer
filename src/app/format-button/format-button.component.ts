import { 
  Component, 
  Input,
  Output,
  EventEmitter 
} from '@angular/core';

import { Formatting } from '../formatting';

@Component({
  selector: 'app-format-button',
  templateUrl: './format-button.component.html',
  styleUrls: ['./format-button.component.css']
})

export class FormatButtonComponent {
  @Input() value: string;
  @Input() name: string;
  @Input() text: string;
  @Input() wrap: boolean;
  @Input() faClass: string;
  @Output() onBtnClick = new EventEmitter<Formatting>();

  handleClick(): void {
    let formatting = {
      value: this.value,
      wrap: this.wrap
    }
    this.onBtnClick.emit(formatting);
  }
}
