import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'decodeHtml'
})
export class DecodeHtmlPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return ''
    const textarea = document.createElement('textarea')
    textarea.innerHTML = value
    return textarea.value
  }
}
