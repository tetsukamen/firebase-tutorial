// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebase: {
    apiKey: "AIzaSyA5jj8cg8cPs-EVHdDY09wzhMcV6qcNl4k",
    authDomain: "todo-demo-app-angular-215d9.firebaseapp.com",
    projectId: "todo-demo-app-angular-215d9",
    storageBucket: "todo-demo-app-angular-215d9.appspot.com",
    messagingSenderId: "654075367637",
    appId: "1:654075367637:web:22874733a1d86bbfc6125c",
    measurementId: "G-JJJP85JXZ0"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
