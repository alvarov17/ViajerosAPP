import { NgModule } from '@angular/core';
import { NumberPipe } from './number/number';
@NgModule({
	declarations: [NumberPipe],
	imports: [],
	exports: [NumberPipe]
})
export class PipesModule {}
