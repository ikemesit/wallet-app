// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig : {
    apiKey: "AIzaSyA4bbx4VKD3QLUR1SdyLAMXpo6QxzIO8cw",
    authDomain: "wallet-app-687ed.firebaseapp.com",
    databaseURL: "https://wallet-app-687ed.firebaseio.com",
    projectId: "wallet-app-687ed",
    storageBucket: "wallet-app-687ed.appspot.com",
    messagingSenderId: "525369726153"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
