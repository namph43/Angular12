import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('appHightLight') appHightLight = 'blue';

  constructor(private el: ElementRef) {
    
   }

   ngOnInit():void{
    console.log('ngOnInit HighLightDirective', this.appHightLight);
    this.el.nativeElement.style.color = this.appHightLight;
   }

}
