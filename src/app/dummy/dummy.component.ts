import { AfterContentChecked, AfterContentInit, AfterViewChecked,
  ContentChild,
  AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, 
  OnInit, SimpleChanges, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit,OnChanges,DoCheck, 
AfterContentInit,AfterContentChecked , AfterViewInit, AfterViewChecked,OnDestroy
{
 @ViewChild('test') paragraph!:ElementRef
 @ContentChild('heading') heading!:ElementRef
 @Input() message!:string
constructor(){
  console.log('Hello From The Constructor');
  
}
ngOnInit(): void {
  console.log('Ng On Init Running..');
  
  
}
ngDoCheck(): void {
  console.log('Ng Do Check is running');
  
}
ngAfterContentChecked(): void {
  console.log('Content Checked');
  
}
ngAfterContentInit(): void {
  console.log('Content Initialized');
  console.log(this.heading.nativeElement.textContent);
}
ngOnChanges(changes: SimpleChanges): void {
  console.log('ngOnChanges Running');
  console.log(changes);
  
}
ngAfterViewInit(): void {
  console.log('View init Running');
  console.log(this.paragraph.nativeElement.textContent);
}
ngAfterViewChecked(): void {
  console.log('View  Checked');
}
ngOnDestroy(): void {
  console.log('Rest in Peace');
  
}

}
