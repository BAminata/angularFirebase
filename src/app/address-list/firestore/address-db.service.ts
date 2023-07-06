import { Injectable, inject} from '@angular/core';
// import {AngularFirestore, DocumentChangeAction, DocumentReference} from "@angular/fire/compat/firestore";
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  setDoc,
  deleteDoc
} from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {AddressEntry} from "../address-entry";
import {AuthService} from "../../authentication/auth.service";
// import {DocumentChangeAction, DocumentReference} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AddressDbService {
  private firestore:  Firestore = inject(Firestore);
  private authService: AuthService = inject(AuthService);

  constructor() {
  }

  getAddresses(): Observable<AddressEntry[]> {
    const addresses = collection(this.firestore, 'abooks', this.authService.userid, 'addresses');
    return collectionData(addresses, {idField: 'id'}) as Observable<AddressEntry[]>;
    /*
    return this.firestore
      .collection('abooks')
      .doc(this.authService.userid)
      .collection('addresses')
      .snapshotChanges();
     */
  }

  createAddress(address: AddressEntry) {
    const addresses = collection(this.firestore, 'abooks', this.authService.userid, 'addresses');
    delete address.id;
    return addDoc(addresses, address);

/*    return this.firestore
      .collection('abooks')
      .doc(this.authService.userid)
      .collection('addresses')
      .add({...address});

 */
  }

  updateAddress(address: AddressEntry) {
    const addressId = address.id;
    delete address.id;
    const addresses = collection(this.firestore, 'abooks', this.authService.userid, 'addresses');
    const addressRef = doc(addresses, addressId!);
    return setDoc(addressRef, address);
    /*return this.firestore
      .collection('abooks')
      .doc(this.authService.userid)
      .collection('addresses')
      .doc(addressId!)
      .update({...address});

     */
  }

  deleteAddress(addressId: string): Promise<void> {
    const addresses = collection(this.firestore, 'abooks', this.authService.userid, 'addresses');
    const addressRef = doc(addresses, addressId);
    return deleteDoc(addressRef);
  }
    /*
    return this.firestore
      .collection('abooks')
      .doc(this.authService.userid)
      .collection('addresses')
      .doc(addressId)
      .delete();
  }

     */
}
