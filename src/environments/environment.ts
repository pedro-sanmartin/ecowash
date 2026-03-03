// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useMock: true,
  urlBase: 'https://api.example.com',
  urlBaseLocales: ':9091/api/v1/local',
  urlBaseAuth: ':9092/api/v1/login',
  urlBaseServicios: ':9093/api/v1/servicio',
  urlBaseUsuarios: ':9094/api/v1/usuario',
  urlBaseUtils: ':9095/api/v1/util',
  urlBasePago: ':9096/api/v1/pago',
  schemes: {
    role: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
    email: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress',
    name: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
    descriptionRole:
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname',
    id: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
