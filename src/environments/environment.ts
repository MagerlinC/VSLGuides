// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB6n5cpIX7QmGhSf3kiLY2LMzNFPKbsMKk',
    authDomain: 'vslguides.firebaseapp.com',
    databaseURL: 'https://vslguides.firebaseio.com',
    projectId: 'vslguides',
    storageBucket: 'vslguides.appspot.com',
    messagingSenderId: '408794952797'
  }
};
