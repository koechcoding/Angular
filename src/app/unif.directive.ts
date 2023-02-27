import { Directive,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnif]'
})
export class UnifDirective {
  @Input() set appUnif(condition:boolean){
    if(!condition){
      //Add Paragraph  to the dom 
      this.vcRef.createEmbeddedView(this.tempRef)
    }else{
      //remove paragraphs from the dom
      this.vcRef.clear()
    }
  }
  constructor(private tempRef :TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
