import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { DisplayComponent } from './display/display.component';
import { SampleComponent } from './sample/sample.component';
import { ProductsComponent } from './products/products.component';
import { Shorten } from 'src/Shorten';
import { FilterPipe } from './filter.pipe';
import { DummyComponent } from './dummy/dummy.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from './product.service';
import { HighLightDirective } from './Directives/Highlighter';
import { Highlighter2Directive } from './highlighter2.directive';
import { UnifDirective } from './unif.directive';
import { TemplateDFComponent } from './template-df/template-df.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DisplayComponent,
    SampleComponent,
    ProductsComponent,
    Shorten,
    FilterPipe,
    DummyComponent,
    AddProductComponent,
    HighLightDirective,
    Highlighter2Directive,
    UnifDirective,
    TemplateDFComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
