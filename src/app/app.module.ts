import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressListElementComponent } from './address-list/address-list-element/address-list-element.component';
import { AddressViewComponent } from './address-list/address-view/address-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
// import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getAuth, provideAuth} from "@angular/fire/auth";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressListComponent,
    AddressListElementComponent,
    AddressViewComponent,
    SignInComponent,
    SignUpComponent,
    PasswordForgotComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        // AngularFireModule.initializeApp(environment.firebase),
        // AngularFirestoreModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
