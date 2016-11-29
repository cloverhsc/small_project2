import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformSex'
})
export class TransformSexPipe implements PipeTransform {

  transform(value: string): any {
      let sex = '';
      if (value === 'M')
      {
          sex = '男';
      }
      else if ( value === 'F' )
      {
          sex = '女';
      }
      else
      {
          sex = '';
      }
    return sex;
  }

}
