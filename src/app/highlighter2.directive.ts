import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter2]'
})
export class Highlighter2Directive implements OnInit{
  @Input() background:string='transparent'
  @Input() textColor:string='black'

  @HostBinding('style.backgroundColor') backgroundColor!:string 
  @HostBinding('style.color') color!:string 

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }
  
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent')
  }

  @HostListener('mouseenter') mouseenter(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue')
    // this.renderer.setStyle(this.elementRef.nativeElement,'color', 'white')
    this.backgroundColor=this.background
    this.color=this.textColor
  }

  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent')
    // this.renderer.setStyle(this.elementRef.nativeElement,'color', 'black')
    this.backgroundColor='transparent'
    this.color='black'
  }
}
