import { Component, ElementRef, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[ProductService] // will work for our case because the two components are children of this parent
  })
export class AppComponent implements AfterViewInit {

  @ViewChild('temp') temp!:ElementRef
  title = 'first-app';
  data:{name:string,role:string}[]=[{name:'Verah', role:'Student'}]
  day=new Date().getDay()
  show=true;
  message='Hello From There'

  AddPerson(event:{name:string,role:string}){
    this.data.push({name:event.name ,role:event.role})
  }
  ngAfterViewInit(): void {
    console.log(this.temp);
    
  }
  Test(e:Event){

  }
  Toggle(){
    this.show=!this.show
  }
  changeMessage(){
    this.message='Hi There'
    this.show=!this.show
  }

}
