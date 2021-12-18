import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(duration: number): string {

    let hours = Math.floor(duration / 60)
    let minutes = duration % 60

    return `${hours}h ${minutes}min`
  }

}
