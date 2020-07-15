import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  
  constructor(private sanitized: DomSanitizer) {}
  
  //This pipe allows the report html to appear within the innerHTML of the results component.
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
