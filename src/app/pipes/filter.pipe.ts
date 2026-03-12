import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, fields?: string[]): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    const defaultFields = ['title', 'description', 'author', 'source'];
    const fieldsToSearch = fields || defaultFields;

    return items.filter(item => {
      return fieldsToSearch.some(field => {
        const value = this.getFieldValue(item, field);
        return value ? value.toString().toLowerCase().includes(searchText) : false;
      });
    });
  }

  private getFieldValue(obj: any, path: string): any {
    return path.split('.').reduce((o, p) => o && o[p], obj);
  }
}
