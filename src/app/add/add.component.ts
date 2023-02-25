import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Output() sentData= new EventEmitter<{name:string,role:string}>()
  
  AddPerson(name:HTMLInputElement, role:HTMLSelectElement){
  this.sentData.emit({name:name.value, role:role.value})
  }
}
