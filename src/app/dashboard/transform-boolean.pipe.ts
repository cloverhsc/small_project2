import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformBoolean'
})
export class TransformBooleanPipe implements PipeTransform {

    transform(value: boolean): string {
        let bool = '';
        if ( value )
        {
            bool = '是';
        }
        else
        {
            bool  = '否';
        }
        return bool;
    }

}
