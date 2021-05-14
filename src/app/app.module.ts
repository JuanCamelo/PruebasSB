import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from '../assets/helpers/fake-backend';
import { JwtInterceptor} from '../assets/helpers/jwt.interceptor';
import { ErrorInterceptor } from '../assets/helpers/errorInterceptor';

//redux
import { StoreModule } from '@ngrx/store';

import {AppComponent} from "./app.component"
import { AppRoutingModule } from './app-routing.module';





@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
    
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
         fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };