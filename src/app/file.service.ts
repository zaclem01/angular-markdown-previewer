import { Injectable } from '@angular/core';

@Injectable()
export class FileService {
  // Accept single file and return a promise to the contents
  readSingleFile(file: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsText(file);
    });
  }

  // Accept multiple files and return an array of promises to the contents
  readMultFiles(files: Array<any>): Array<Promise<string>> {
    let result = [];

    for(let i = 0; i < files.length; i++) {
      // Must instantiate new reader each time, as one will possibly still be busy by
      // the time the next file is called to be read
      let reader = new FileReader();
      result.push(new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.readAsText(files[i]);
      }));
    }
    return result;
  }
}
