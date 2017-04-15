import {Pipe, PipeTransform} from '@angular/core'

@Pipe ({
	name: 'sort'	
})

export class SortPipe implements PipeTransform {
	transform(value: number[], args: string): any {
		//return (args === 'ascending') ? value.sort() : value.sort().reverse()
		if ( args === `>` ) {
			return value.sort()
		} else if ( args == `<` ) {
			return value.sort().reverse()
		}
	}
}
