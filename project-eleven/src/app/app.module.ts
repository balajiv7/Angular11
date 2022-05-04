import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingComponent } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './entry/entry.component';
import { EmpformComponent } from './empform/empform.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BooklistComponent } from './booklist/booklist.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryComponent,
    EmpformComponent,
    BooklistComponent,
   
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [EmpformComponent]
})
export class AppModule { }
