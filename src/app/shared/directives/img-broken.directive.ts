import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void{
    const elementNative = this.host.nativeElement;
    console.error("Imagen no pudo ser cargada ", this.host );
    elementNative.src = '../../../assets/images/imgBroken.jpg'
  }

  constructor(private host: ElementRef) { }

}
