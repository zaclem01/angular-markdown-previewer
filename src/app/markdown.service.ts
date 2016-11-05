import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable()
export class MarkdownService {
  safeParse(raw: string): string {
    marked.setOptions({ sanitize: true });
    return marked(raw);
  }

  dangerousParse(raw: string): string {
    marked.setOptions({ sanitize: false });
    return marked(raw);
  }
}
