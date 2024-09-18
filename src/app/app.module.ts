import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostsListModule} from "./posts-list/posts-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PostsListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
