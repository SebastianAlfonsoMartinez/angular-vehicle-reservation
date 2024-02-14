import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false;
  @HostListener('error') handleError(): void{
    const elementNative = this.host.nativeElement;
    console.error("Imagen no pudo ser cargada ", this.host );
    
    if(this.customImg){
      elementNative.src = this.customImg
    }else{
      elementNative.src = '/assets/images/imgBroken.jpg'
    }
  }

  constructor(private host: ElementRef) { }

}
