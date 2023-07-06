import { Injectable, inject } from '@angular/core';
import { Subscription} from 'rxjs';
import {
  Auth, User, user,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword, signInWithPopup, signOut,
  GoogleAuthProvider
} from "@angular/fire/auth";
// import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private afAuth: Auth = inject(Auth);
  private loggedUser: User | null = null;
  user$ = user(this.afAuth);
  userSubscription: Subscription;

  constructor(
  ) {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      this.loggedUser = aUser;
    });
  }

 /* get user(): Observable<User | null> {
    // @ts-ignore
    return this.afAuth.user;
  }

  */

  get userid(): string {
    if (this.loggedUser) return this.loggedUser.uid;
    return '';
  }

  signIn(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.afAuth, email, password)
      .then((credential) => {
        this.loggedUser = credential.user;
      });
  }

  signUp(email: string, password: string, name: string): Promise<void> {
    return createUserWithEmailAndPassword(this.afAuth, email, password)
      .then((credential) => {
        const user = credential.user;
        this.loggedUser = credential.user; // shouldn't be null...
        if (user) {
          // user.updateProfile({displayName: name}).then(_ => {});
        }
      });
  }

  passwordReset(passwordResetEmail: string): Promise<void> {
    return sendPasswordResetEmail(this.afAuth, passwordResetEmail);
  }

  googleAuth(): Promise<void> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.afAuth, provider)
      .then((credential) => {
        this.loggedUser = credential.user;
      });
  }

  signOut(): Promise<void> {
    return signOut(this.afAuth)
      .then((_) => {
        this.loggedUser = null;
      });
  }
}

