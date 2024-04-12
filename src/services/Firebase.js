import { initializeApp } from "firebase/app";

export class Firebase {
  constructor() {
    this._app = initializeApp({
        apiKey: import.meta.env.VITE_API_KEY,
        authDomain: "test-final-project-5119c.firebaseapp.com",
        projectId: "test-final-project-5119c",
        storageBucket: "test-final-project-5119c.appspot.com",
        messagingSenderId: "93076013782",
        appId: "1:93076013782:web:b2473f080e8e6b4b3cff77"
    });
  }

  get app() {
    return this._app;
  }
}

export const firebaseService = new Firebase();