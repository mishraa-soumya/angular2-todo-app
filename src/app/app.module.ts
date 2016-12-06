import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TodoAppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(TodoAppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
