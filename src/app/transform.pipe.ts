import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'transform'
})
export class TransformPipe implements PipeTransform {
	transform(value: any): string {
		let transformed = value.split(' ').reverse().join().replace(',', ' ', ' ');
		return transformed;
	}
}
