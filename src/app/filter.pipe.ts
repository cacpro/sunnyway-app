import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(item: any, selected:number): boolean {
		if (!item || !selected)
		{
            return true;
        }

		let found = false;
		
	 	for(let category of item.categories){
		 	if(category.id == selected)
		 	{
			 	found = true;
		 	}
	 	}

	 	return found;        
	}

}
